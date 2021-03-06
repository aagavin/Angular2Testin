let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');


let index = require('./routes/api/index');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, '/../client/dist'));

console.log(__dirname+'/../client/dist');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '/../client/dist'), { redirect: false }));

app.use('/api', index);

app.get('*', function (req, res, next) {
    res.sendFile(path.resolve(path.join(__dirname, '/../client/dist')+'/index.html'));
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

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
