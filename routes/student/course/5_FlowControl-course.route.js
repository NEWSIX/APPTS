const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){

      res.render('student/course/5_FlowControl-course', { person });
  }
});

module.exports = router;

