var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Navbar */
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var projectRouter = require('./routes/project');
/* Teacher */
var teacherhomeRouter = require('./routes/teacher-home');
var teacherclassRouter = require('./routes/teacher-class');

/** Course */
var courseRouter = require('./routes/course/0.introduce/introduce');
//
var syntax_A = require('./routes/course/1.syntax/syntax-A');
var syntax_B = require('./routes/course/1.syntax/syntax-B');
var syntax_Test = require('./routes/course/1.syntax/syntax-Test');
//
var datatype_A = require('./routes/course/2.datatype/datatype-A');
var datatype_B = require('./routes/course/2.datatype/datatype-B');
var datatype_Test = require('./routes/course/2.datatype/datatype-test');
//
var operators_A = require('./routes/course/3.operators/operators-A');
var operators_B = require('./routes/course/3.operators/operators-B');
var operators_Test = require('./routes/course/3.operators/operators-Test');
//
var control_statement_A = require('./routes/course/4.control_statement/control_statement-A');
var control_statement_B = require('./routes/course/4.control_statement/control_statement-B');
var control_statement_Test = require('./routes/course/4.control_statement/control_statement-Test');
//
var loop_A = require('./routes/course/5.loop/loop-A');
var loop_B = require('./routes/course/5.loop/loop-B');
var loop_Test = require('./routes/course/5.loop/loop-Test');
//
var array_A = require('./routes/course/6.array/array-A');
var array_B = require('./routes/course/6.array/array-B');
var array_Test = require('./routes/course/6.array/array-Test');
//
var file_operation_A = require('./routes/course/7.file_operation/file_operation-A');
var file_operation_B = require('./routes/course/7.file_operation/file_operation-B');
var file_operation_test = require('./routes/course/7.file_operation/file_operation-Test');
/** end Course */



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


app.use('/home', homeRouter);

app.use('/project', projectRouter);

app.use('/teacher', teacherhomeRouter);
app.use('/class', teacherclassRouter);




/** Course */
app.use('/course', courseRouter);
//
app.use('/course-syntax-A', syntax_A);
app.use('/course-syntax-B', syntax_B);
app.use('/course-syntax-test', syntax_Test);
//
app.use('/course-sysntax-A',    syntax_A);
app.use('/course-sysntax-B',    syntax_B);
app.use('/course-sysntax-test', syntax_Test);
//
app.use('/course-datatype-A',    datatype_A);
app.use('/course-datatype-B',    datatype_B);
app.use('/course-datatype-test', datatype_Test);
//
app.use('/course-operators-A',    operators_A);
app.use('/course-operators-B',    operators_B);
app.use('/course-operators-test', operators_Test);
//
app.use('/course-control_statement-A',    control_statement_A);
app.use('/course-control_statement-B',    control_statement_B);
app.use('/course-control_statement-test', control_statement_Test);
//
app.use('/course-loop-A',    loop_A);
app.use('/course-loop-B',    loop_B);
app.use('/course-loop-test', loop_Test);
//
app.use('/course-array-A',    array_A);
app.use('/course-array-B',    array_B);
app.use('/course-array-test', array_Test);
//
app.use('/course-file_operation-A',    file_operation_A);
app.use('/course-file_operation-B',    file_operation_B);
app.use('/course-file_operation-test', file_operation_test);









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

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});


module.exports = app;

const port = process.env.PORT || 8080
console.log("\n\n ******************************** \n\n")
app.listen(port, () => console.log(`Listening on port ${port}\n\n`))