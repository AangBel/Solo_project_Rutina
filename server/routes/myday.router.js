const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

/**
 * GET route
 */
router.get('/api/tasks', rejectUnauthenticated, (req, res) => {
  const query =  `
  SELECT * FROM Routines_1_Basic`;
  pool.query(query)
  .then((result)=>{
    console.log('this is result.rows', result.rows);
    // console.log('this is result.rows', req.user);
    res.send(result.rows);
    // res.send(req.user);
  })
  .catch((err) => {
    console.log("error in GET all Tasks", err);
    res.sendStatus(500);
  });
});

/**
 * POST route
 */
// is the url "/api/tasks" or "/"?
router.post("/", (req, res) => {
  console.log("this is req body", req.body);
  console.log("this is req body payload", req.body.payload);

  const hacer = req.body;

  const insertNewTask = `
  INSERT INTO "Routines_1_Basic"("task_name", "task_time_start", "task_time_end", "status", "userId")
    VALUES ($1, $2, $3, $4, $5)
  `;

  pool
    .query(insertNewTask, [
      hacer.taskName,
      hacer.task_time_start,
      hacer.task_time_end,
      hacer.status,
      hacer.userId,
    ])
    .then((result) => {
      console.log("this is the result under the router.post", result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
