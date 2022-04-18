const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const mydatabase = "APPTSystem";

router.post('/joinclass', async (req, res, next) => {
  try {
    const person = req.user;
    const classToken = req.body.classToken;
    if(person.role === "Student"){

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydatabase);
          var query = { token: classToken };
          dbo.collection("TeacherClass").find(query).toArray(function(err, classesResult) {
            if (err) throw err;

            if(Object.keys(classesResult).length != ''){

              MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db(mydatabase);
                var query = { email: person.email };
                dbo.collection("StudentClass").find(query).toArray(function(err, result) {
                  if (err) throw err;

                  if(Object.keys(result).length === 0){
                    console.log("\n\n*********\n");

                    MongoClient.connect(url, function(err, db) {
                      if (err) throw err;
                      var dbo = db.db(mydatabase);
                      
                      var myobj = {times: new Date().toLocaleString(), email: person.email,ClassName:classesResult[0].name,token: classesResult[0].token};
                      dbo.collection("StudentClass").insertOne(myobj, function(err, res) {
                        if (err) throw err;
                        db.close();
                      });
                    });
                  }
                  else{
                    MongoClient.connect(url, function(err, db) {
                      if (err) throw err;
                      var dbo = db.db(mydatabase);
                      var myquery = { email: person.email };
                      var newvalues = { $set: {ClassName : classesResult[0].name} };
                      dbo.collection("StudentClass").updateOne(myquery, newvalues, function(err, res) {
                        if (err) throw err;
                        db.close();
                      });
                    });
                  }
                  db.close();
                });
              });
            }
            else{}

            db.close();
          });
        });
      res.redirect('back');
    }
    
    
  } catch (error) {
    next(error);
  }
});




router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){
    if(person.role === "ADMIN"){
      res.render('index/index_admin', { person });
    }
    if(person.role === "Teacher"){
      res.render('index/index_teacher', { person });
    }
    if(person.role === "Student"){

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        var query = { email:person.email };
        dbo.collection("StudentClass").find(query).toArray(function(err, result) {
          if (err) throw err;
          db.close();
          res.render('index/index_student', { person ,result});
        });
      });
    }
  }
  else res.render('index/index_viewer');
});






module.exports = router;
