const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post("/tasks", (req, res) => {
  console.log("this is req body", req.body);
  console.log("this is req body payload", req.body.payload);

  const hacer = req.body;

  const insertNewTask = `
  INSERT INTO "Routines_1_Basic"("task_name", "task_time_start", "task_time_end", "status", "userId")
    VALUES ($1, $2, $3, $4, $5)
  `;

  pool.query(insertNewTask[hacer.taskName, hacer.taskTimeStart, hacer.taskTimeEnd, hacer.status, hacer.userId])
  .then((result) => {
    console.log('this is the result under the router.post', result);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
