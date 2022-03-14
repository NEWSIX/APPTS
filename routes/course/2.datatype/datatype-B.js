var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/2.datatype/datatype-B', {});
});

module.exports = router;
