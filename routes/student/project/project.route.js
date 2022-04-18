const router = require('express').Router();

router.get('/', async (req, res, next) => {
  const person = req.user;
  if(person != undefined){
      res.render('student/project/project_main', { person });
  }
});

module.exports = router;