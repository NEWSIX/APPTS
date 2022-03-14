var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/1.syntax/syntax-B', {});
});

module.exports = router;
