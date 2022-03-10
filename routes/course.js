var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course', 
    {
        question:`<h1 id="scrollspyHeading1">opts</h1>`
    });
});


// if get จาก course มาเปลี่ยนเทียบ value ที่ส่งมาแล้ว ตรวจสอบว่าจะส่งไปหน้า ejs ไหน 

module.exports = router;
