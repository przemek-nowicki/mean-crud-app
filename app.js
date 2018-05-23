const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const api = require('./api/routes/api.route');
const app = express();
const bluebird = require('bluebird');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mean-crud-app';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', api);

app.use(function(req, res, next) {
  const error = createError(404);
  res.status(error.status).json({status: error.status, message: error.message});
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

const mongoose = require('mongoose');
mongoose.Promise = bluebird;

mongoose.connect(MONGODB_URI)
    .then(() => {  console.log(`Successfully connected to the Mongodb Database  at URL : ${MONGODB_URI}`) })
    .catch(() => { console.error(`Error Connecting to the Mongodb Database at URL : ${MONGODB_URI}`)});

// CORS configuration
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

module.exports = app;
