const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://appts:Appts123456789@apptsystem.jgb2f.mongodb.net/test";

const mydatabase = "APPTSystem";

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

  /* 1.Syntax */
  if (c11 === 'A') {scoreC1 = scoreC1 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c12 === 'D') {scoreC1 = scoreC1 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c13 === 'C') { coreC1 = scoreC1 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 2.Data Type, Output */
  if (c21 === 'C') {scoreC2 = scoreC2 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c22 === 'D') {scoreC2 = scoreC2 + 1; scoreLV2 = scoreLV2 + 10;}
  if (c23 === 'A') {scoreC2 = scoreC2 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 3.Operators */
  if (c31 === 'D') {scoreC3 = scoreC3 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c32 === 'B') {scoreC3 = scoreC3 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c33 === 'D') {scoreC3 = scoreC3 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 4.Flow Control */
  if (c41 === 'A') {scoreC4 = scoreC4 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c42 === 'A') {scoreC4 = scoreC4 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c43 === 'B') {scoreC4 = scoreC4 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 5.Array */
  if (c51 === 'B') {scoreC5 = scoreC5 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c52 === 'C') {scoreC5 = scoreC5 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c53 === 'A') {scoreC5 = scoreC5 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 6.File Operation */
  if (c61 === 'A') {scoreC6 = scoreC6 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c62 === 'A') {scoreC6 = scoreC6 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c63 === 'B') {scoreC6 = scoreC6 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 7.Pointers */
  if (c71 === 'A') {scoreC7 = scoreC7 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c72 === 'D') {scoreC7 = scoreC7 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c73 === 'C') {scoreC7 = scoreC7 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 8.Strings */
  if (c81 === 'B') {scoreC8 = scoreC8 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c82 === 'B') {scoreC8 = scoreC8 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c83 === 'D') {scoreC8 = scoreC8 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 9.Structure */
  if (c91 === 'A') {scoreC9 = scoreC9 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c92 === 'A') {scoreC9 = scoreC9 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c93 === 'A') {scoreC9 = scoreC9 + 1; scoreLV3 = scoreLV3 + 30;}
  /* 10.Function */
  if (c101 === 'B') {scoreC10 = scoreC10 + 1; scoreLV1 = scoreLV1 + 10;}
  if (c102 === 'C') {scoreC10 = scoreC10 + 1; scoreLV2 = scoreLV2 + 20;}
  if (c103 === 'A') {scoreC10 = scoreC10 + 1; scoreLV3 = scoreLV3 + 30;}
  /** */

 


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var myobj = { 
      timetodo:1,
      times: new Date().toLocaleString(), 
      email: person.email,
      role:person.role,
      contentName:currentQuiz,
      scoreLV1:scoreLV1, //Basic
      scoreLV2:scoreLV2, //Trace
      scoreLV3:scoreLV3, //Explain
      scoreC1:scoreC1, //Intro
      scoreC2:scoreC2,  //String
      scoreC3:scoreC3,  //Datatype
      scoreC4:scoreC4,
      scoreC5:scoreC5,
      scoreC6:scoreC6,
      scoreC7:scoreC7,
      scoreC8:scoreC8,
      scoreC9:scoreC9,
      scoreC10:scoreC10  //Array
    };
    dbo.collection("StudentAnswer").insertOne(myobj, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });
  res.redirect('back')   
 
    try {         
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
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        var query = { email:/.*m.*/ };
        dbo.collection("StudentAnswer").find(query).toArray(function(err, StudentAnswer) {
          if (err) throw err;
          db.close();

          var BasicScore =0;
          var TraceScore =0;
          var ExplainScore =0;
          var WriteScore =0;
          var studentAll = Object.keys(StudentAnswer).length;
          
          var IntroductionScore=0,IntroductionCount=0;
          var StringScore=0,StringCount=0;
          var DatatypeScore=0,DatatypeCount=0;
          var OperatorsScore=0,OperatorsCount=0;
          var FlowControlScore=0,FlowControlCount =0;
          var PointersScore=0,PointersCount=0;
          var FunctionScore=0,FunctionCount=0;
          var StructureScore=0,StructureCount=0;
          var ArrayScore=0,ArrayCount=0;

          var TicTacToeScore=0,TicTacToeCount=0;
          var LibrarySystemScore=0,LibrarySystemCount=0;
          var RoshamboScore=0,RoshamboCount=0;
          var CalculatorScore=0,CalculatorCount=0;
          var CalendarScore=0,CalendarCount=0;

          
          for(let i = 0; i < studentAll; i++) {

            if( StudentAnswer[i].contentName ==='Introduction-Quiz' ){
              if(StudentAnswer[i].scoreTeacher === undefined){
                IntroductionScore = IntroductionScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;
              }
              else{
                IntroductionScore = IntroductionScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);
              }
              IntroductionCount++;
            }
            if (StudentAnswer[i].contentName ==='String-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                StringScore =StringScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                StringScore =StringScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
              StringCount++;
            }
            if (StudentAnswer[i].contentName ==='Datatype-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                DatatypeScore =DatatypeScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                DatatypeScore =DatatypeScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                DatatypeCount++;
            } 
            if (StudentAnswer[i].contentName ==='Operators-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                OperatorsScore =OperatorsScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                OperatorsScore =OperatorsScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                OperatorsCount++;
            }
            if (StudentAnswer[i].contentName ==='FlowControl-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                FlowControlScore =FlowControlScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                FlowControlScore =FlowControlScore+ StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                FlowControlCount++;
            }
            if (StudentAnswer[i].contentName ==='Pointers-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                PointersScore = PointersScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                PointersScore = PointersScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                PointersCount++;
            }
            if (StudentAnswer[i].contentName ==='Function-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                FunctionScore = FunctionScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                FunctionScore = FunctionScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                FunctionCount++;
            }
            if (StudentAnswer[i].contentName ==='Structure-Quiz') {   
                if(StudentAnswer[i].scoreTeacher === undefined){
                  StructureScore = StructureScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
                else{
                  StructureScore = StructureScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                  StructureCount++;
            }
            if (StudentAnswer[i].contentName ==='Array-Quiz') {   
              if(StudentAnswer[i].scoreTeacher === undefined){
                ArrayScore = ArrayScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3;}
              else{
                ArrayScore = ArrayScore+StudentAnswer[i].scoreLV1+StudentAnswer[i].scoreLV2+StudentAnswer[i].scoreLV3+parseInt(StudentAnswer[i].scoreTeacher);}
                ArrayCount++;
            }
            /** */

            if (StudentAnswer[i].contentName ==='TicTacToe') {   
              if(StudentAnswer[i].scoreTeacher === undefined){}
              else{
                TicTacToeScore = TicTacToeScore+parseInt(StudentAnswer[i].scoreTeacher);}
                TicTacToeCount++;
            }
            if (StudentAnswer[i].contentName ==='LibrarySystem') {   
              if(StudentAnswer[i].scoreTeacher === undefined){}
              else{
                LibrarySystemScore = LibrarySystemScore+parseInt(StudentAnswer[i].scoreTeacher);}
                LibrarySystemCount++;
            }
            if (StudentAnswer[i].contentName ==='Roshambo') {   
              if(StudentAnswer[i].scoreTeacher === undefined){}
              else{
                RoshamboScore = RoshamboScore+parseInt(StudentAnswer[i].scoreTeacher);}
                RoshamboCount++;
            }
            if (StudentAnswer[i].contentName ==='Calculator') {   
              if(StudentAnswer[i].scoreTeacher === undefined){}
              else{
                CalculatorScore = CalculatorScore+parseInt(StudentAnswer[i].scoreTeacher);}
                CalculatorCount++;
            }
            if (StudentAnswer[i].contentName ==='Calendar') {   
              if(StudentAnswer[i].scoreTeacher === undefined){}
              else{
                CalendarScore = CalendarScore+parseInt(StudentAnswer[i].scoreTeacher);}
                CalendarCount++;
            }
           

            if( StudentAnswer[i].contentName ==='Introduction-Quiz' ||
                StudentAnswer[i].contentName ==='Datatype-Quiz' || 
                StudentAnswer[i].contentName ==='String-Quiz' ||
                StudentAnswer[i].contentName ==='Operators-Quiz' ||
                StudentAnswer[i].contentName ==='FlowControl-Quiz' ||
                StudentAnswer[i].contentName ==='Pointers-Quiz' ||
                StudentAnswer[i].contentName ==='Function-Quiz' ||
                StudentAnswer[i].contentName ==='Structure-Quiz' ||
                StudentAnswer[i].contentName ==='Array-Quiz' 
              ){
                if(StudentAnswer[i].scoreTeacher === undefined){
                  BasicScore = BasicScore+StudentAnswer[i].scoreLV1
                  TraceScore = TraceScore+StudentAnswer[i].scoreLV2
                  ExplainScore = ExplainScore+StudentAnswer[i].scoreLV3
                }
                else{
                  BasicScore = BasicScore+StudentAnswer[i].scoreLV1
                  TraceScore = TraceScore+StudentAnswer[i].scoreLV2
                  ExplainScore = ExplainScore+StudentAnswer[i].scoreLV3
                  WriteScore = WriteScore+parseInt(StudentAnswer[i].scoreTeacher);
                }
              }
          }


          if(IntroductionScore != 0) IntroductionScore = IntroductionScore/IntroductionCount;
          if(StringScore != 0) StringScore = StringScore/StringCount;
          if(DatatypeScore !=0) DatatypeScore = DatatypeScore/DatatypeCount;
          if(OperatorsScore != 0)OperatorsScore = OperatorsScore/OperatorsCount;
          if(FlowControlScore != 0)FlowControlScore = FlowControlScore/FlowControlCount;
          if(PointersScore != 0)PointersScore = PointersScore/PointersCount;
          if(FunctionScore != 0)FunctionScore = FunctionScore/FunctionCount;
          if(StructureScore != 0)StructureScore = StructureScore/StructureCount;
          if(ArrayScore != 0)ArrayScore = ArrayScore/ArrayCount;

          if(TicTacToeScore != 0) TicTacToeScore = TicTacToeScore/TicTacToeCount;
          if(LibrarySystemScore != 0) LibrarySystemScore = LibrarySystemScore/LibrarySystemCount;
          if(RoshamboScore != 0) RoshamboScore = RoshamboScore/RoshamboCount;
          if(CalculatorScore != 0) CalculatorScore = CalculatorScore/CalculatorCount;
          if(CalendarScore != 0) CalendarScore = CalendarScore/CalendarCount;

          else;  

          let CourseScoreObj={
            'Introduction':{score:IntroductionScore},
            'String':{score:StringScore},
            'Datatype':{score:DatatypeScore},
            'Operators':{score:OperatorsScore},
            'Flow Control':{score:FlowControlScore},
            'Pointers':{score:PointersScore},
            'Function':{score:FunctionScore},
            'Structure':{score:StructureScore},
            'Array':{score:ArrayScore}
          }
          let sortedCourse = Object.keys(CourseScoreObj);
          sortedCourse.sort((a,b) => {
            //sort by score
            return CourseScoreObj[b].score - CourseScoreObj[a].score;
          });

          let ProjectScoreObj={
            'TicTacToe':{score:TicTacToeScore},
            'Library System':{score:LibrarySystemScore},
            'Roshambo':{score:RoshamboScore},
            'Calculator':{score:CalculatorScore},
            'Calendar':{score:CalendarScore}
          }
          let sortedProject = Object.keys(ProjectScoreObj);
          sortedProject.sort((a,b) => {
            //sort by score
            return ProjectScoreObj[b].score - ProjectScoreObj[a].score;
          });

          var BasicPercent =  Math.round(((BasicScore/(studentAll*10))*100));
          var TracePercent= Math.round(((TraceScore/(studentAll*20))*100))
          var ExplainPercent = Math.round(((ExplainScore/(studentAll*30))*100))
          var WritePercent = Math.round(((WriteScore/(studentAll*40))*100))

          var PercentTotal =  BasicPercent+TracePercent+ExplainPercent+WritePercent;
          BasicPercent = (BasicPercent/PercentTotal)*100;
          TracePercent = (TracePercent/PercentTotal)*100;
          ExplainPercent = (ExplainPercent/PercentTotal)*100;
          WritePercent = (WritePercent/PercentTotal)*100;

          // var checksumper = BasicPercent+TracePercent+ExplainPercent+WritePercent
          // console.log("\nCHECKSUM : " ,checksumper); //100

          res.render('index/index_teacher', { person ,sortedCourse,sortedProject,
            BasicPercent,TracePercent,ExplainPercent,WritePercent
          })

          });
        });
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


            /** Update Data In class */
            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var dbo = db.db(mydatabase);
              var query = { email:person.email};
              dbo.collection("StudentAnswer").find(query).toArray(function(err, StudentAnswer) {
                if (err) throw err;

                var IntroductionDone = "NO" ,StringDone = "NO" ,OperatorsDone = "NO" ,DatatypeDone = "NO",FlowControlDone = "NO",PointersDone = "NO",FunctionDone = "NO",StructureDone = "NO",ArrayDone = "NO";
                var TicTacToeDone = "NO" , Library_SystemDone = "NO" , RoshamboDone = "NO" ,CalendarDone = "NO" , CalculatorDone = "NO";
      
                for (let i = 0; i < Object.keys(StudentAnswer).length; i++) {

                  if(StudentAnswer[i].contentName ==='Introduction-Quiz'){
                    IntroductionDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Datatype-Quiz'){
                    DatatypeDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='String-Quiz'){
                    StringDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Operators-Quiz'){
                    OperatorsDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='FlowControl-Quiz'){
                    FlowControlDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Pointers-Quiz'){
                    PointersDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Function-Quiz'){
                    FunctionDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Structure-Quiz'){
                    StructureDone = "YES";
                  }
                  if(StudentAnswer[i].contentName ==='Array-Quiz'){
                    ArrayDone = "YES";
                  }
                  /** */
                  if (StudentAnswer[i].contentName ==='TicTacToe') {   
                    TicTacToeDone = "YES";
                  }
                  if (StudentAnswer[i].contentName ==='LibrarySystem') {   
                    Library_SystemDone = "YES";
                  }
                  if (StudentAnswer[i].contentName ==='Roshambo') {   
                    RoshamboDone = "YES";
                  }
                  if (StudentAnswer[i].contentName ==='Calculator') {   
                    CalendarDone = "YES";
                  }
                  if (StudentAnswer[i].contentName ==='Calendar') {   
                    CalculatorDone = "YES";
                  }

                }

                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydatabase);
                  var query = { email: person.email };
                  dbo.collection("StudentClass").find(query).toArray(function(err, StudentClass) {
                    if (err) throw err;
                      if(Object.keys(StudentClass).length > 0){
                        MongoClient.connect(url, function(err, db) {
                          if (err) throw err;
                          var dbo = db.db(mydatabase);
                          var myquery = { email: person.email};
                          var newvalues = { $set: {
                            TicTacToe:TicTacToeDone,
                            LibrarySystem:Library_SystemDone,
                            Roshambo:RoshamboDone,
                            Calculator:CalendarDone,
                            Calendar:CalculatorDone,
                            Introduction:IntroductionDone,
                            String:StringDone,
                            Datatype:DatatypeDone,
                            Operators:OperatorsDone,
                            FlowControl:FlowControlDone,
                            Pointers:PointersDone,
                            Function:FunctionDone,
                            Structure:StructureDone,
                            Array:ArrayDone
                          } };
                          dbo.collection("StudentClass").updateOne(myquery, newvalues, function(err, res) {
                            if (err) throw err;
                            db.close();
                          });
                        });
                      }
                  })
                });
              });
            });/** Update Data In class */



            /** Chart */
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
                var TicTacToe = 5 , Library_System = 3 , Roshambo = 4 ,Calendar = 3 , Calculator = 3;
                var TicTacToeDone = 0 , Library_SystemDone = 0 , RoshamboDone = 0 ,CalendarDone = 0 , CalculatorDone = 0;
        
        
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
                var BasicPercent =  Math.round(((BasicScore/(CourseDone*10))*100));
                var TracePercent= Math.round(((TraceScore/(CourseDone*20))*100))
                var ExplainPercent = Math.round(((ExplainScore/(CourseDone*30))*100))
                var WritePercent = Math.round(((WriteScore/(CourseDone*40))*100))

                var PercentTotal =  BasicPercent+TracePercent+ExplainPercent+WritePercent;
                BasicPercent = (BasicPercent/PercentTotal)*100;
                TracePercent = (TracePercent/PercentTotal)*100;
                ExplainPercent = (ExplainPercent/PercentTotal)*100;
                WritePercent = (WritePercent/PercentTotal)*100;

                // var checksumper = BasicPercent+TracePercent+ExplainPercent+WritePercent
                // console.log("\nCHECKSUM : " ,checksumper); //100
                
                if(IntroductionDone === 1){
                  TicTacToeDone = TicTacToeDone+1 ,
                  Library_SystemDone = Library_SystemDone+1 , 
                  RoshamboDone = RoshamboDone+1 ,
                  CalendarDone = CalendarDone+1 , 
                  CalculatorDone = CalculatorDone+1;
                }
                if(StringDone === 1){
                  Library_SystemDone = Library_SystemDone+1 , 
                  RoshamboDone = RoshamboDone+1,
                  CalculatorDone = CalculatorDone+1
                }
                if(FlowControlDone === 1){
                  TicTacToeDone = TicTacToeDone+1 ,
                  Library_SystemDone = Library_SystemDone+1 , 
                  RoshamboDone = RoshamboDone+1 ,
                  CalendarDone = CalendarDone+1 , 
                  CalculatorDone = CalculatorDone+1;
                }
                if(ArrayDone === 1){
                  TicTacToeDone = TicTacToeDone+1 
                }
                if(PointersDone === 1){
                  TicTacToeDone = TicTacToeDone+1 
                }


                var TicTacToePercent = Math.round((TicTacToeDone/TicTacToe)*100)
                var Library_SystemPercent = Math.round((Library_SystemDone/Library_System)*100)
                var RoshamboPercent = Math.round((RoshamboDone/Roshambo)*100)
                var CalendarPercent = Math.round((CalendarDone/Calendar)*100)
                var CalculatorPercent = Math.round((CalculatorDone/Calculator)*100)

                res.render('index/index_student', { person ,result,
                  BasicPercent,TracePercent,ExplainPercent,WritePercent,
                  TicTacToePercent,Library_SystemPercent,RoshamboPercent,CalendarPercent,CalculatorPercent
                });
              
                
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

                    MongoClient.connect(url, function(err, db) {
                      if (err) throw err;
                      var dbo = db.db(mydatabase);
                      var query = { email:person.email};
                      dbo.collection("StudentAnswer").find(query).toArray(function(err, StudentAnswer) {
                        if (err) throw err;
        
                        var IntroductionDone = "NO" ,StringDone = "NO" ,OperatorsDone = "NO" ,DatatypeDone = "NO",FlowControlDone = "NO",PointersDone = "NO",FunctionDone = "NO",StructureDone = "NO",ArrayDone = "NO";
                        var TicTacToeDone = "NO" , Library_SystemDone = "NO" , RoshamboDone = "NO" ,CalendarDone = "NO" , CalculatorDone = "NO";
              
                        for (let i = 0; i < Object.keys(StudentAnswer).length; i++) {
        
                        if(StudentAnswer[i].contentName ==='Introduction-Quiz'){
                          IntroductionDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Datatype-Quiz'){
                          DatatypeDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='String-Quiz'){
                          StringDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Operators-Quiz'){
                          OperatorsDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='FlowControl-Quiz'){
                          FlowControlDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Pointers-Quiz'){
                          PointersDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Function-Quiz'){
                          FunctionDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Structure-Quiz'){
                          StructureDone = "YES";
                        }
                        if(StudentAnswer[i].contentName ==='Array-Quiz'){
                          ArrayDone = "YES";
                        }
                        /** */
                        if (StudentAnswer[i].contentName ==='TicTacToe') {   
                          TicTacToeDone = "YES";
                        }
                        if (StudentAnswer[i].contentName ==='LibrarySystem') {   
                          Library_SystemDone = "YES";
                        }
                        if (StudentAnswer[i].contentName ==='Roshambo') {   
                          RoshamboDone = "YES";
                        }
                        if (StudentAnswer[i].contentName ==='Calculator') {   
                          CalendarDone = "YES";
                        }
                        if (StudentAnswer[i].contentName ==='Calendar') {   
                          CalculatorDone = "YES";
                        }
        
                        }
                        
                        MongoClient.connect(url, function(err, db) {
                          if (err) throw err;
                          var dbo = db.db(mydatabase);
                          
                          var myobj = {
                            times: new Date().toLocaleString(), 
                            email: person.email,ClassName:classesResult[0].name,
                            token: classesResult[0].token ,
                            teacher:classesResult[0].email,
                            TicTacToe:TicTacToeDone,
                            LibrarySystem:Library_SystemDone,
                            Roshambo:RoshamboDone,
                            Calculator:CalendarDone,
                            Calendar:CalculatorDone,
                            Introduction:IntroductionDone,
                            String:StringDone,
                            Datatype:DatatypeDone,
                            Operators:OperatorsDone,
                            FlowControl:FlowControlDone,
                            Pointers:PointersDone,
                            Function:FunctionDone,
                            Structure:StructureDone,
                            Array:ArrayDone
                          };
                          dbo.collection("StudentClass").insertOne(myobj, function(err, res) {
                            if (err) throw err;
                            db.close();
                          });
                        });
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



module.exports = router;
