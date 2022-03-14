var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var homeRouter = require('./routes/home');
var courseRouter = require('./routes/course');
var projectRouter = require('./routes/project');

var teacherhomeRouter = require('./routes/teacher-home');
var teacherclassRouter = require('./routes/teacher-class');

var compilerRouter = require('./routes/compiler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/home', homeRouter);
app.use('/course', courseRouter);
app.use('/project', projectRouter);

app.use('/teacher', teacherhomeRouter);
app.use('/class', teacherclassRouter);

app.use('/ide', compilerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const port = process.env.PORT || 8080
console.log("\n\n ******************************** \n\n")
app.listen(port, () => console.log(`Listening on port ${port}\n\n`))