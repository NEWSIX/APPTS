const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";

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
                      
                      var myobj = {times: new Date().toLocaleString(), email: person.email,ClassName:classesResult[0].name,token: classesResult[0].token ,teacher:classesResult[0].email};
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


router.post('/pretestSubmit', async (req, res, next) => {
  const person = req.user;
  var currentQuiz = "Pre-test"
  var scoreLV1=0,scoreLV2=0,scoreLV3=0;
  var scoreC1=0,scoreC2=0,scoreC3=0,scoreC4=0,scoreC5=0,scoreC6=0,scoreC7=0,scoreC8=0,scoreC9=0,scoreC10=0;
  var c11 = req.body.c11;
  var c12 = req.body.c12;
  var c13 = req.body.c13;
  var c21 = req.body.c21;
  var c22 = req.body.c22;
  var c23 = req.body.c23;
  var c31 = req.body.c31;
  var c32 = req.body.c32;
  var c33 = req.body.c33;
  var c34 = req.body.c34;
  var c41 = req.body.c41;
  var c42 = req.body.c42;
  var c43 = req.body.c43;
  var c44 = req.body.c44;
  var c51 = req.body.c51;
  var c52 = req.body.c52;
  var c53 = req.body.c53;
  var c54 = req.body.c54;



  //1 check lv
  if(c11 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC1=scoreC1 + 10;}
  if(c12 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC1=scoreC1 + 20;}
  if(c13 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC1=scoreC1 + 30;}
  //2
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //3
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //4
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //5
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //6
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //7
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //8
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //9
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}
  //10
  if(c21 === 'A'){  scoreLV1=scoreLV1 + 10; scoreC2=scoreC2 + 10;}
  if(c22 === 'D'){  scoreLV2=scoreLV2 + 20; scoreC2=scoreC2 + 20;}
  if(c23 === 'B'){  scoreLV3=scoreLV3 + 30; scoreC2=scoreC2 + 30;}

 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var myobj = { 
      timetodo:1,
      times: new Date().toLocaleString(), 
      email: person.email,
      role:person.role,
      quizName:currentQuiz,
      scoreLV1:scoreLV1,
      scoreLV2:scoreLV2,
      scoreLV3:scoreLV3,
      scoreC1:scoreC1,
      scoreC2:scoreC2,
      scoreC3:scoreC3,
      scoreC4:scoreC4,
      scoreC5:scoreC5,
      scoreC6:scoreC6,
      scoreC7:scoreC7,
      scoreC8:scoreC8,
      scoreC9:scoreC9,
      scoreC10:scoreC10
    };
    dbo.collection("StudentAnswer").insertOne(myobj, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });
 
    try {
  
        res.redirect('back')    
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
        var query = { email: person.email };
        dbo.collection("StudentAnswer").find(query).toArray(function(err, StudentAnswer) {
          if (err) throw err;
          if(Object.keys(StudentAnswer).length === 0){
            res.render('student/pretest', {person});
          }
          else{
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
          
          db.close();
        });
      });

      
    }
  }
  else res.render('index/index_viewer');
});




module.exports = router;
