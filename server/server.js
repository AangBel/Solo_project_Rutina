const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.Console(),
//   ],
// });

// logger.info('Server started');
// // logger.error('Error getting bells from database', error);
// Route includes
const userRouter = require("./routes/user.router");
const myDayRouter = require("./routes/myday.router");
const bellRouter = require("./routes/bells.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// This is the question - /

/* Routes */
app.use("/api/user", userRouter);
//would it be '/api/tasks' or just tasks?
//i think it would be  api bc im understanding that redux saga is an api and im using sagas so it might be /api?
app.use("/api/tasks", myDayRouter);
app.use("/api/bells", bellRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
