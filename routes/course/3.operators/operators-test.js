var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/3.operators/operators-Test', {});
});

module.exports = router;
