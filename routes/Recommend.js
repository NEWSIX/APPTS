
const fs = require('fs');
let rawdata = fs.readFileSync('./user.json');
let userJson = JSON.parse(rawdata);
var user = userJson.name;
console.log(user);

var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "DB_Test";

/* GET home page. */
router.get('/', function(req, res, next) {
  compareArray();
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { Content_total:/.*m*/ };
    dbo.collection("Content_total").find(query).toArray(function(err, result1) {
      if (err) throw err;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        var query = { name:user};
        dbo.collection("score").find(query).toArray(function(err, result) {
          if (err) throw err;
          var storeData = [];
          var storeCourse = [];
          var projectA = result1[0].projectA;
          var projectB = result1[0].projectB;
          var projectC = result1[0].projectC;
          var projectD = result1[0].projectD;
          var courseTotal = result1[0].Content_total;
          var storeBTEW = [];
          var storeBasic = [];
          var storeTracing = [];
          var storeExplaining = [];
          var storeWritng = [];

          for (let i = 0; i < Object.keys(result).length; i++) {
              var type = result[i].type;
              if(type != "project"){
                  var score = result[i].score;
                  var content = result[i].content
                  storeData.push({"content":content,"score":score})
                  storeBasic.push(result[i].B)
                  storeTracing.push(result[i].T)
                  storeExplaining.push(result[i].E)
                  storeWritng.push(result[i].W)
              }
          }
          var courseDone = Bestscore(storeData);
          for (let i = 0; i < Object.keys(courseDone).length; i++) {
            storeCourse.push(courseDone[i].content)
          }


 /* RECOMMENDATION SYSTEM */
          console.log("\n----------------------------------\n Info : * "+ user )
          console.log("----------------------------------\n\t @1.Content Recommend \n----------------------------------")
          const differenceCourse = courseTotal.diff( storeCourse );
          console.log("* Done :  ",storeCourse)
          console.log("* Total : ",courseTotal)
          console.log("* Content Left : ",differenceCourse)
          console.log("* Content Left :",Object.keys(differenceCourse).length)

          console.log("----------------------------------\n\t@2.Recommend For Fast Project\n----------------------------------")
          const differenceProjectA = projectA.diff( storeCourse );
          const differenceProjectB = projectB.diff( storeCourse );
          const differenceProjectC = projectC.diff( storeCourse );
          const differenceProjectD = projectD.diff( storeCourse );

          var Ac = Object.keys(differenceProjectA).length;
          var Bc = Object.keys(differenceProjectB).length;
          var Cc = Object.keys(differenceProjectC).length;
          var Dc = Object.keys(differenceProjectD).length;
          var project_recommendation = "* No Project Recommend";
          if(Ac <= Bc &&  Cc && Dc ){project_recommendation = differenceProjectA+" for projectA"};
          if(Bc <= Ac &&  Cc && Dc ){project_recommendation = differenceProjectB+" for projectB"}
          if(Cc <= Ac &&  Bc && Dc ){project_recommendation = differenceProjectC+" for projectC"};
          if(Dc <= Ac &&  Bc && Cc ){project_recommendation = differenceProjectD+" for projectD"}
          console.log(project_recommendation);

          var weak = Bestscore(storeData).sort(function(a, b) {return a.score - b.score;})[0].content; // Sort weak first
          var strengths = Bestscore(storeData).sort(function(a, b) {return b.score - a.score;})[0].content; // Sort strengths first
          console.log("----------------------------------\n\t@3.Strengths and Weaknesses \n----------------------------------")
          console.log("* Weaknesses : ",weak);
          console.log("* Strengths : ",strengths);

          console.log("----------------------------------\n\t@4.BTEW \n----------------------------------")
          const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
          const ArgBasic = average(storeBasic.map(str => {return Number(str);}));
          const ArgTracing = average(storeTracing.map(str => {return Number(str);}));
          const ArgExplaining = average(storeExplaining.map(str => {return Number(str);}));
          const ArgWritng = average(storeWritng.map(str => {return Number(str);}));

          storeBTEW.push({"content":"Basic","score":ArgBasic})
          storeBTEW.push({"content":"Tracing","score":ArgTracing})
          storeBTEW.push({"content":"Explaining","score":ArgExplaining})
          storeBTEW.push({"content":"Writng","score":ArgWritng})

          var BTEWweak = Bestscore(storeBTEW).sort(function(a, b) {return a.score - b.score;})[0].content; // Sort weak first
          var BTEWstrengths = Bestscore(storeBTEW).sort(function(a, b) {return b.score - a.score;})[0].content; // Sort strengths first
          console.log("* BTEW Weakness :",BTEWweak);
          console.log("* BTEW Strengths :",BTEWstrengths);
          console.log("----------------------------------\n\t\t END \n----------------------------------")
 /* END RECOMMENDATION SYSTEM */

          res.render('recommendation', { 
            title: 'Recommendation'
            ,user:user
            ,ContentDone:storeCourse
            ,ContentTotal:courseTotal
            ,ContentLeft:differenceCourse
            ,CountLeft:Object.keys(differenceCourse).length
            ,ProjectRecommend:project_recommendation
            ,Weaknesses:weak
            ,Strengths:strengths
            ,BTEW_Weakness:BTEWweak
            ,BTEW_Strengths:BTEWstrengths
          
          
          
          
          });

          db.close();
        });
      });
      db.close();
      
    });
    
  });


  
});

module.exports = router;



function compareArray(){
  Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
  };
}

function Bestscore(storeData){
  const pickHighest = arr => {
      const res = [], map = {};
      
      arr.forEach(el => {
          if (!(el['content'] in map)) {
              map[el['content']] = res.push(el) - 1;
              return;
          };
          if(res[map[el['content']]]['score'] < el['score']){
              res[map[el['content']]] = el;
          };
      });
      return res;
      };
  return pickHighest(storeData);
}
