const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";
const mydatabase = "APPTSystem";

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){

      res.render('student/quiz/1_Introduction-quiz', { person });
  }
});

router.post('/submit', async (req, res, next) => {
  const person = req.user;
  const choice1  = req.body.choice1
  const choice2  = req.body.choice2
  var scoreLV1 = 0;
  var scoreLV2 = 0;
  var scoreLV3 = 0;
  if(choice1 === 'A'){
    console.log("\n Choice 1 Correct!")
    scoreLV1 = 10;
  }
  if(choice2 === 'D'){
    console.log("Choice 2 Correct! \n")
    scoreLV2 = 20;
  }
  console.log("\n C1 : ",choice1 , "\n C2 : " ,choice2 ,"\n_________")
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { email:person.email};
    dbo.collection("StudentAnswer").find(query).toArray(function(err, result) {
      if (err) throw err;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        var myobj = { 
          timetodo:Object.keys(result).length+1,
          times: new Date().toLocaleString(), 
          email: person.email,
          role:person.role,
          quizName:"Introduction-Quiz",
          scoreLV1:scoreLV1,
          scoreLV2:scoreLV2,
          scoreLV3:scoreLV3,
        };
        dbo.collection("StudentAnswer").insertOne(myobj, function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
    });
  });

  try {

      res.redirect('/course')    
  } catch (error) {
    next(error);
  }
});

module.exports = router;

