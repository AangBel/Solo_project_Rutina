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
//with or without quotes on the table name?
//do i have to add the WHERE USERID= part?
// SELECT * FROM "Routines_1_Basic"
// WHERE "userId" = $1
router.get("/", rejectUnauthenticated, (req, res) => {
  const query = `
  SELECT * FROM routines ORDER BY id ASC`;

  pool
    .query(query)
    .then((result) => {
      console.log("this is result.rows", result.rows);
      console.log("this is req.user", req.user);

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

router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("this is req body in router.post under myDay router", req.body);
  // console.log("this is req body payload", req.body.payload);
  console.log("this is req", req);
  console.log("this is req.params", req.params);

  const hacer = req.body;

  const insertNewTask = `
  INSERT INTO "routines"("task_name", "task_time_start", "task_time_end", "status", "userId")
    VALUES ($1, $2, $3, $4, $5)
  `;

  const taskValues = [
    hacer.task_name,
    hacer.task_time_start,
    hacer.task_time_end,
    hacer.status,
    hacer.userId,
  ];

  pool
    .query(insertNewTask, taskValues)
    .then((result) => {
      console.log("this is the result under the router.post", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error adding task", error);
      res.sendStatus(500);
    });
});

module.exports = router;

/**
 * PUT route
 */
//maybe put in id with- ${}?
//(`/api/tasks/${task.id}`)??
router.put("/api/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  console.log('this should be the task id:', taskId);

  //we want to be able to update the task_name and the time ...
  const updateTaskName = req.body.task_name;
  console.log('this should be the updated task name?', updateTaskName);

  let mySqlQuery = `
    UPDATE routines SET task_name = $1 WHERE id = $2
  `;

  pool
  .query(mySqlQuery, [updateTaskName, taskId])
  .then((result) => {
    console.log(`task id of task who's name was updated: ${taskId}`);
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error updating the task name', error);
    res.sendStatus(500);
  })
})
