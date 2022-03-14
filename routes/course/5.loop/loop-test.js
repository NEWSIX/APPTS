var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/5.loop/loop-test', {});
});

module.exports = router;
