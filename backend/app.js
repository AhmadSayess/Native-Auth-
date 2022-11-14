var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const conncetDB = require("./config/db");

var cors = require("cors");
var createError = require("http-errors");

const dotenv = require("dotenv");
dotenv.config();
conncetDB();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

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
