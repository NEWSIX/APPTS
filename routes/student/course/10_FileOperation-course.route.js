const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";
const mydatabase = "APPTSystem";

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydatabase);
      var query = {email:person.email};
      dbo.collection("StudentRecommendation").find(query).toArray(function(err, RecommendaResult) {
        if (err) throw err;
    
        res.render('student/course/10_FileOperation-course', { person ,RecommendaResult});
      });
    });

     
  }
});



module.exports = router;

