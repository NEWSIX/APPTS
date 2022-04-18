const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){

      res.render('student/course/6_Pointers-course', { person });
  }
});

module.exports = router;

