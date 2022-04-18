const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){

      res.render('student/quiz/5_FlowControl-quiz', { person });
  }
});

module.exports = router;

