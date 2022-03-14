var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/4.control_statement/control_statement-B', {});
});

module.exports = router;
