const router = require('express').Router();
var compiler = require('compilex');
var options = {stats : true}; //prints stats on console 
compiler.init(options);
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";
const mydatabase = "APPTSystem";

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){
    // PRETEST Check
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydatabase);
      var query = { email: person.email };
      dbo.collection("StudentAnswer").find(query).toArray(function(err, StudentAnswer) {
        if (err) throw err;
        if(Object.keys(StudentAnswer).length === 0){
          res.redirect('/')
        }
        else{
          var Introduction,String,Datatype,Operators,FlowControl,Pointers,Function ,Structure ,Array;
          for (let i = 0; i < Object.keys(StudentAnswer).length; i++) {
            if(StudentAnswer[i].contentName === 'Introduction-Quiz'){
              Introduction = 1
            }
            if(StudentAnswer[i].contentName === 'String-Quiz'){
              String = 1
            }
            if(StudentAnswer[i].contentName === 'Datatype-Quiz'){
              Datatype = 1
            }
            if(StudentAnswer[i].contentName === 'Operators-Quiz'){
              Operators = 1
            }
            if(StudentAnswer[i].contentName === 'FlowControl-Quiz'){
              FlowControl = 1
            }
            if(StudentAnswer[i].contentName === 'Pointers-Quiz'){
              Pointers = 1
            }
            if(StudentAnswer[i].contentName === 'Function-Quiz'){
              Function = 1
            }
            if(StudentAnswer[i].contentName === 'Structure-Quiz'){
              Structure = 1
            }
            if(StudentAnswer[i].contentName === 'Array-Quiz'){
              Array = 1
            }
          }
          res.render('student/project/project_main', { person ,Introduction,String,Datatype,Operators,FlowControl,Pointers,Function ,Structure ,Array});
        }
        db.close();
      });
    });
    // PRETEST Check
      
  }
});

module.exports = router;