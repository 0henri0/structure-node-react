'use strict';

require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('./config/configure');
const admin = require('./routes/admin');
const web = require('./routes/web');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser('thai_secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://localhost:3000'
  ],
  credentials: true
}));
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.on('error', function(err) {
  console.log('Error connect to Database: ' + err);
});

app.use('/admin', admin);
app.use('/', web);

app.use(function (req, res) {
  res.sendStatus(404);
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
