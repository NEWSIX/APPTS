const router = require('express').Router();
var compiler = require('compilex');
const { roles } = require('../../../utils/constants');
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
            //////********RECOMMENDATION*********** */

            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var dbo = db.db(mydatabase);
              var query = {email:person.email};
              dbo.collection("StudentRecommendation").find(query).toArray(function(err, RecommendaResult) {
                if (err) throw err;

                 //หาคอร์สที่เรียนไป แล้วกรองไม้ให้ซ้ำกัน
                var ArrCourseDone = [];
                for(let i = 0; i < Object.keys(StudentAnswer).length; i++) {        //value คือ ความยาก ง่าย - 1 ยาก - 9
                  if (StudentAnswer[i].contentName ==='Introduction-Quiz') {ArrCourseDone.push({key:"Introduction",value:1});} 
                  if (StudentAnswer[i].contentName ==='String-Quiz') {ArrCourseDone.push({key:"String",value:4});}
                  if (StudentAnswer[i].contentName ==='Datatype-Quiz') {ArrCourseDone.push({key:"Datatype",value:2});} 
                  if (StudentAnswer[i].contentName ==='Operators-Quiz') { ArrCourseDone.push({key:"Operators",value:3});}
                  if (StudentAnswer[i].contentName ==='FlowControl-Quiz') {ArrCourseDone.push({key:"Flow Control",value:8});}
                  if (StudentAnswer[i].contentName ==='Pointers-Quiz') {ArrCourseDone.push({key:"Pointers",value:7});}
                  if (StudentAnswer[i].contentName ==='Function-Quiz') {ArrCourseDone.push({key:"Function",value:5});}
                  if (StudentAnswer[i].contentName ==='Structure-Quiz') {ArrCourseDone.push({key:"Structure",value:6});}
                  if (StudentAnswer[i].contentName ==='Array-Quiz') {ArrCourseDone.push({key:"Array",value:9});}
                  if (StudentAnswer[i].contentName ==='Pre-test') { 
                      if(StudentAnswer[i].scoreC1 === 3){ArrCourseDone.push({key:"Introduction",value:1});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC8 === 3){ArrCourseDone.push({key:"String",value:4});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC2 === 3){ArrCourseDone.push({key:"Datatype",value:2});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC3 === 3){ArrCourseDone.push({key:"Operators",value:3});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC4 === 3){ArrCourseDone.push({key:"Flow Control",value:8});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC7 === 3){ArrCourseDone.push({key:"Pointers",value:7});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC10 === 3){ArrCourseDone.push({key:"Function",value:5});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC9 === 3){ArrCourseDone.push({key:"Structure",value:6});} //pre test ทำได้ 3 ข้อ
                      if(StudentAnswer[i].scoreC5 === 3){ArrCourseDone.push({key:"Array",value:9});} //pre test ทำได้ 3 ข้อ 
                    }  
                }
               
                let CourseDonedictionary = Object.assign({}, ...ArrCourseDone.map((x) => ({[x.key]: x.value}))); //Array to dictionary
                var items = Object.keys(CourseDonedictionary).map( //sort dictionary
                  (key) => { return [key, CourseDonedictionary[key]] });
                items.sort(
                  (first, second) => { return first[1] - second[1] }
                );
                // CourseDoneSorted คือ คอร์สที่ทำเสร็จรวมกับ ความยาก
                var CourseDoneSorted = items.map(
                  (e) => { return e[0] });


                
                // StudentAnswer คือ ข้อมูลคะแนนนักเรียนที่ดึงจาก Database 
                // RecommendaResult[0].RecommendationType คือ วิธีแนะนำที่ผู้เรียนเลือก

                var RecommendOutput = [];
                var CourseTotol = ['Introduction','Datatype','Operators','String','Function','Structure','Pointers','Flow Control','Array'] //เรียกจากง่ายไปยาก เปรียบเทียบที่เหมือนกับ path_left หาตัวที่ต่าง เพื่อเลือกตัวง่ายสุดแสดงผล (ไม่รวม file operation)
                var Course_Left = [];
                var ArrRankStorage = []
               
                var PathTicTacToe = ['Introduction','Datatype','Operators','String','Function','Pointers','Flow Control','Array'] //เรียกจากง่ายไปยาก
                var PathLibrary = ['Introduction','Datatype','Operators','String','Structure','Flow Control'] 
                var PathRoshambo = ['Introduction','Datatype','Operators','String','Function','Structure','Flow Control'] 
                var PathCalendar = ['Introduction','Datatype','Operators','String','Function','Array'] 
                var PathCalculator = ['Introduction','Datatype','Operators','String','Flow Control'] 
                //ตรวจสอบคอร์สที่ทำ กับ แต่ละ path
                var b = new Set(CourseDoneSorted);
                var DiffTicTacToe = [...PathTicTacToe].filter(x => !b.has(x));
                var DiffLibrary = [...PathLibrary].filter(x => !b.has(x));
                var DiffRoshambo = [...PathRoshambo].filter(x => !b.has(x));
                var DiffCalendar = [...PathCalendar].filter(x => !b.has(x));
                var DiffCalculator = [...PathCalculator].filter(x => !b.has(x));
                var DiffTotal = [...CourseTotol].filter(x => !b.has(x)); //ตรวจสอบ course ที่เหลืออยู่ทั้งหมด
                
                if(Object.keys(RecommendaResult).length !== 0){
                  //ถ้ายังเรียนไม่ครบ จะสามารถแนะนำได้
                  if(Object.keys(DiffTotal).length !== 0){
                    //***RECOMMEND : COURSE
                    if(RecommendaResult[0].RecommendationType === "Fastest Path"){
                      //ตรวจสอบว่ายังมีคอร์สเหลือไหม && เก็บข้อมูลเพื่อส่งต่อ
                      if(DiffTicTacToe.length != 0) {Course_Left.push({CourseName:"TicTacToe"  ,length:DiffTicTacToe.length , CourseLEFT :DiffTicTacToe})}
                      if(DiffLibrary.length != 0)   {Course_Left.push({CourseName:"Library"    ,length:DiffLibrary.length   , CourseLEFT :DiffLibrary})}
                      if(DiffRoshambo.length != 0)  {Course_Left.push({CourseName:"Roshambo"   ,length:DiffRoshambo.length  , CourseLEFT :DiffRoshambo})}
                      if(DiffCalendar.length != 0)  {Course_Left.push({CourseName:"Calendar"   ,length:DiffCalendar.length  , CourseLEFT :DiffCalendar})}
                      if(DiffCalculator.length != 0){Course_Left.push({CourseName:"Calculator" ,length:DiffCalculator.length, CourseLEFT :DiffCalculator})}
                      //หา path ที่น้อยที่สุด
                      var rankCourse_left = Course_Left.sort(function (a, b) {return a.length - b.length;});
                      // มี path น้อยสุดเพียง 1 path
                      if(rankCourse_left[0].length != rankCourse_left[1].length){ RecommendOutput.push(rankCourse_left[0].CourseLEFT[0])}
                      // มี path เหมือกัน 2 path
                      else if (rankCourse_left[0].length === rankCourse_left[1].length){
                        ArrRankStorage.push(rankCourse_left[0].CourseLEFT[0],rankCourse_left[1].CourseLEFT[0])
                        let uniqueArr = [...new Set(ArrRankStorage)];
                        const intersection = uniqueArr.filter(element => CourseTotol.includes(element));
                        RecommendOutput = intersection;
                      }
                      // มี path เหมือกัน 3 path
                      else if (rankCourse_left[0].length === rankCourse_left[1].length ||rankCourse_left[0].length === rankCourse_left[2].length ){
                        ArrRankStorage.push(rankCourse_left[0].CourseLEFT[0],rankCourse_left[1].CourseLEFT[0],rankCourse_left[2].CourseLEFT[0])
                        let uniqueArr = [...new Set(ArrRankStorage)];
                        const intersection = uniqueArr.filter(element => CourseTotol.includes(element));
                        RecommendOutput = intersection;
                      }
                      // มี path เหมือกัน 4 path
                      else if (rankCourse_left[0].length === rankCourse_left[1].length ||rankCourse_left[0].length === rankCourse_left[2].length ||rankCourse_left[0].length === rankCourse_left[3].length ){
                        ArrRankStorage.push(rankCourse_left[0].CourseLEFT[0],rankCourse_left[1].CourseLEFT[0],rankCourse_left[2].CourseLEFT[0],rankCourse_left[3].CourseLEFT[0])
                        let uniqueArr = [...new Set(ArrRankStorage)];
                        const intersection = uniqueArr.filter(element => CourseTotol.includes(element));
                        RecommendOutput = intersection;
                      }
                      // มี path เหมือกัน 5 path หรือ เท่ากันทั้งหมด จะแนะนำ course ที่ไม่ได้่ทำที่ง่ายที่สุด
                      else{RecommendOutput = DiffTotal}
                    }
                    //***RECOMMEND : PROJECT ถ้าเลือก path มาก็จะแนะนำ คอร์ส ที่ง่ายที่สุด
                    else if(RecommendaResult[0].RecommendationType === "TicTacToe"  ){ RecommendOutput = DiffTicTacToe  }
                    else if(RecommendaResult[0].RecommendationType === "Library"    ){ RecommendOutput = DiffLibrary    }
                    else if(RecommendaResult[0].RecommendationType === "Roshambo"   ){ RecommendOutput = DiffRoshambo   }
                    else if(RecommendaResult[0].RecommendationType === "Calendar"   ){ RecommendOutput = DiffCalendar   }
                    else if(RecommendaResult[0].RecommendationType === "Calculator" ){ RecommendOutput = DiffCalculator }
                    if(Object.keys(RecommendOutput).length === 0){  RecommendOutput = "โปรดเลือกการแนะนำ" } //ถ้า คอร์ส ใน path หมดแล้ว
                    else{ RecommendOutput = RecommendOutput[0]  } //เลือกตัวแรกของ array = ตัวที่ง่ายที่สุด
                  }
                  else {RecommendOutput = "สิ้นสุดการแนะนำ"} //ไม่เหลือ node (คอร์ส หรือ บทเรียน) ให้แนะนำ
                }

                  //////********End RECOMMENDATION System *********** */
                MongoClient.connect(url, function(err, db) {
                  if (err) throw err;
                  var dbo = db.db(mydatabase);
                  var myquery = { email: person.email };
                  var newvalues = { $set: {RecommendCourse: RecommendOutput } };
                  dbo.collection("StudentRecommendation").updateOne(myquery, newvalues, function(err, res) {
                    if (err) throw err;
                    db.close();
                  });
                });
                  //////********END RECOMMENDATION*********** */
                

                res.render('student/course/course_main', { person ,StudentAnswer,RecommendaResult});
              });
            });

            
          }
          db.close();
        });
      });
      // PRETEST Check
  }
});

module.exports = router;

