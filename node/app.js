var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
// var mongodb = require('mongodb');
// const { check, validationResult } = require('express-validator')

var userRouter = require('./routes/User.js');
const cors = require('cors')
var app = express();

app.use(cors({
  origin: 'http://localhost:3001'
  // origin: 'http://127.0.0.1:5501'

}));
// origin: 'http://localhost:3000/'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/container', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useCreateIndex: true
}).then(() => {
  console.log("connection successfull")
}).catch((e) => {
  console.log(e)
});

const con = mongoose.connection;
con.on("open", function () {
  console.log("database is connected");
});

app.use('/user', userRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3333);
console.log("Listening at port 3333....")