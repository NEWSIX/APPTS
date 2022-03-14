var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('course/7.file_operation/file_operation-B', {});
});

module.exports = router;
