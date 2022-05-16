const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId; 
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";
const mydatabase = "APPTSystem";


router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        //var query = { code:/.*m.*/};
        var query = { lang:"C"};
        dbo.collection("StudentAnswer").find(query).toArray(function(err, result) {
            if (err) throw err;
            var student = []
            for (let i = 0; i < Object.keys(result).length; i++) {
                if(result[i].scoreTeacher === undefined){
                    student.push(result[i])
                }
            }
            if(Object.keys(student).length === 0){
                student.push("null")
            }
            res.render('teacher/check', { person ,student});
            db.close();
        });
      });
  }
});

/** teacher send student score */
router.post('/submit', async (req, res, next) => {
    const person = req.user;
    var scoreStudent = req.body.studentScore;
    var idStudent = req.body.idStudent;
    // Scoring Rubric 1-4
    var studentScoreProject1 = req.body.studentScoreProject1
    var studentScoreProject2 = req.body.studentScoreProject2
    var studentScoreProject3 = req.body.studentScoreProject3
    var studentScoreProject4 = req.body.studentScoreProject4
    let score = 0;

    if(scoreStudent === undefined){
        if(studentScoreProject1 != undefined){
            score = score+1;
        }
        if(studentScoreProject1 != undefined){
            score = score+1;
        }
        if(studentScoreProject2 != undefined){
            score = score+1;
        }
        if(studentScoreProject3 != undefined){
            score = score+1;
        }
    }
    else{
        score = scoreStudent;
    };

    if(idStudent === ""){}
    else{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydatabase);
            var myquery = {_id:ObjectId(idStudent)};
            var newvalues = { $set: {scoreTeacher: score ,checkedBy:person.email} };
            dbo.collection("StudentAnswer").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            db.close();
            });
        });
    }
    try {
        res.redirect('back')    
    } catch (error) {
      next(error);
    }
});

module.exports = router;
