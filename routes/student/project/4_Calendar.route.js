const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){
      res.render('student/project/4_Calendar', { person });
  }
});

module.exports = router;