var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");
var createError = require("http-errors");

const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

    // Connect to the MongoDB cluster
    const mongoAtlasUri = process.env.MONGO_DB;
    try {
        mongoose.connect(
          mongoAtlasUri,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log("Mongoose is connected"),
        );
      } catch (e) {
        console.log("could not connect");
      }
      
      const dbConnection = mongoose.connection;
      dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
      dbConnection.once("open", () => console.log("Connected to DB!"));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// Create error
app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({
      success: false,
      message: err.message,
    });
  });

module.exports = app;

