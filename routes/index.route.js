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
  var c41 = req.body.c41;
  var c42 = req.body.c42;
  var c43 = req.body.c43;
  var c51 = req.body.c51;
  var c52 = req.body.c52;
  var c53 = req.body.c53;
  var c61 = req.body.c61;
  var c62 = req.body.c62;
  var c63 = req.body.c63;
  var c71 = req.body.c71;
  var c72 = req.body.c72;
  var c73 = req.body.c73;
  var c81 = req.body.c81;
  var c82 = req.body.c82;
  var c83 = req.body.c83;
  var c91 = req.body.c91;
  var c92 = req.body.c92;
  var c93 = req.body.c93;
  var c101 = req.body.c101;
  var c102 = req.body.c102;
  var c103 = req.body.c103;
  console.log(c11,c12,c13,c21,c22,c23,c31,c32,c33,c41,c42,c43,c51,c52,c53,c61,c62,c63,c71,c72,c73,c81,c82,c83,c91,c92,c93,c101,c102,c103)

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var myobj = { 
      timetodo:1,
      times: new Date().toLocaleString(), 
      email: person.email,
      role:person.role,
      contentName:currentQuiz,
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


                var IntroductionScoreLV1=0,IntroductionScoreLV2=0,IntroductionScoreLV3=0,IntroductionScoreLV4=0;
                var StringScoreLV1=0,StringScoreLV2=0,StringScoreLV3=0,StringScoreLV4=0;
                var DatatypeScoreLV1=0,DatatypeScoreLV2=0,DatatypeScoreLV3=0,DatatypeScoreLV4=0;
                var OperatorsScoreLV1=0,OperatorsScoreLV2=0,OperatorsScoreLV3=0,OperatorsScoreLV4=0;
                var FlowControlScoreLV1=0,FlowControlScoreLV2=0,FlowControlScoreLV3=0,FlowControlScoreLV4=0;
                var PointersScoreLV1=0,PointersScoreLV2=0,PointersScoreLV3=0,PointersScoreLV4=0;
                var FunctionScoreLV1=0,FunctionScoreLV2=0,FunctionScoreLV3=0,FunctionScoreLV4=0;
                var StructureScoreLV1=0,StructureScoreLV2=0,StructureScoreLV3=0,StructureScoreLV4=0;
                var ArrayLV1=0,ArrayLV2=0,ArrayLV3=0,ArrayLV4=0;
                var IntroductionDone = 0 ,StringDone = 0 ,OperatorsDone = 0 ,DatatypeDone = 0,FlowControlDone = 0,PointersDone = 0,FunctionDone = 0,StructureDone = 0,ArrayDone = 0;
                
        
        
                for(let i = 0; i < Object.keys(StudentAnswer).length; i++) {
                    if (StudentAnswer[i].contentName ==='Introduction-Quiz') {   
                        IntroductionScoreLV1 = StudentAnswer[i].scoreLV1;
                        IntroductionScoreLV2 = StudentAnswer[i].scoreLV2;
                        IntroductionScoreLV3 = StudentAnswer[i].scoreLV3;
                        IntroductionScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        IntroductionDone = 1;
                    } 
                    if (StudentAnswer[i].contentName ==='String-Quiz') {   
                        StringScoreLV1 = StudentAnswer[i].scoreLV1;
                        StringScoreLV2 = StudentAnswer[i].scoreLV2;
                        StringScoreLV3 = StudentAnswer[i].scoreLV3;
                        StringScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        StringDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='Datatype-Quiz') {   
                        DatatypeScoreLV1 = StudentAnswer[i].scoreLV1;
                        DatatypeScoreLV2 = StudentAnswer[i].scoreLV2;
                        DatatypeScoreLV3 = StudentAnswer[i].scoreLV3;
                        DatatypeScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        DatatypeDone = 1;
                    } 
                    if (StudentAnswer[i].contentName ==='Operators-Quiz') {   
                        OperatorsScoreLV1 = StudentAnswer[i].scoreLV1;
                        OperatorsScoreLV2 = StudentAnswer[i].scoreLV2;
                        OperatorsScoreLV3 = StudentAnswer[i].scoreLV3;
                        OperatorsScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        OperatorsDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='FlowControl-Quiz') {   
                        FlowControlScoreLV1 = StudentAnswer[i].scoreLV1;
                        FlowControlScoreLV2 = StudentAnswer[i].scoreLV2;
                        FlowControlScoreLV3 = StudentAnswer[i].scoreLV3;
                        FlowControlScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        FlowControlDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='Pointers-Quiz') {   
                        PointersScoreLV1 = StudentAnswer[i].scoreLV1;
                        PointersScoreLV2 = StudentAnswer[i].scoreLV2;
                        PointersScoreLV3 = StudentAnswer[i].scoreLV3;
                        PointersScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        PointersDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='Function-Quiz') {   
                        FunctionScoreLV1 = StudentAnswer[i].scoreLV1;
                        FunctionScoreLV2 = StudentAnswer[i].scoreLV2;
                        FunctionScoreLV3 = StudentAnswer[i].scoreLV3;
                        FunctionScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        FunctionDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='Structure-Quiz') {   
                        StructureScoreLV1 = StudentAnswer[i].scoreLV1;
                        StructureScoreLV2 = StudentAnswer[i].scoreLV2;
                        StructureScoreLV3 = StudentAnswer[i].scoreLV3;
                        StructureScoreLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        StructureDone = 1;
                    }
                    if (StudentAnswer[i].contentName ==='Array-Quiz') {   
                        ArrayLV1 = StudentAnswer[i].scoreLV1;
                        ArrayLV2 = StudentAnswer[i].scoreLV2;
                        ArrayLV3 = StudentAnswer[i].scoreLV3;
                        ArrayLV4 = parseInt(StudentAnswer[i].scoreTeacher);
                        ArrayDone = 1;
                    }
                }

                /*** SUM */
                var BasicScore = IntroductionScoreLV1+StringScoreLV1+DatatypeScoreLV1+OperatorsScoreLV1+FlowControlScoreLV1+PointersScoreLV1+FunctionScoreLV1+StructureScoreLV1+ArrayLV1 ;
                var TraceScore = IntroductionScoreLV2+StringScoreLV2+DatatypeScoreLV2+OperatorsScoreLV2+FlowControlScoreLV2+PointersScoreLV2+FunctionScoreLV2+StructureScoreLV2+ArrayLV2 ;
                var ExplainScore = IntroductionScoreLV3+StringScoreLV3+DatatypeScoreLV3+OperatorsScoreLV3+FlowControlScoreLV3+PointersScoreLV3+FunctionScoreLV3+StructureScoreLV3+ArrayLV3 ;
                var WriteScore = IntroductionScoreLV4+StringScoreLV4+DatatypeScoreLV4+OperatorsScoreLV4+FlowControlScoreLV4+PointersScoreLV4+FunctionScoreLV4+StructureScoreLV4+ArrayLV4 ;
                var CourseDone = IntroductionDone+StringDone+DatatypeDone+OperatorsDone+FlowControlDone+PointersDone+FunctionDone+StructureDone+ArrayDone;
                /*** Percent */
                var BasicPercent =  Math.round((BasicScore/(CourseDone*10))*100);
                var TracePercent= Math.round((TraceScore/(CourseDone*20))*100)
                var ExplainPercent = Math.round((ExplainScore/(CourseDone*30))*100)
                var WritePercent = Math.round((WriteScore/(CourseDone*40))*100)


                res.render('index/index_student', { person ,result,BasicPercent,TracePercent,ExplainPercent,WritePercent});
              
                
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
