const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// // Handles Ajax request for user information if user is authenticated
// router.get('/', rejectUnauthenticated, (req, res) => {
//   // TODO - not entirely sure about whether the userID = ($1) syntax is correct
//   const query =  `
//   SELECT * FROM Routines_1_Basic 
//   WHERE userId = ($1)`;
//   pool.query(query)
//   .then((result)=>{
//     res.send(result.rows);
//   })
//   .catch((err) => {
//     console.log("error in GET all Tasks", err);
//     res.sendStatus(500);
//   });
//   // Send back user object from the session (previously queried from the database)
//   // TODO DO I HAVE TO USE THIS PART? IS IT PART OF THE AUTH? IF IT IS AND IT ONLY SENDS 
//   // TODO THE USERS OWN STUFF THEN DOES THAT MEAN I DONT HAVE TO DO THE USERID=($1) PART IN THE QUERY?
//   // res.send(req.user);
// });
//-------------------------------------------------
// THIS ONE DOESN'T HAVE THE USER ID IN THE SQL QUERY AND IT USES THE RES.SEND(REQ.USER) FROM THE TEMPLATE
router.get('/', rejectUnauthenticated, (req, res) => {
  // TODO - not entirely sure about whether the userID = ($1) syntax is correct
  const query =  `
  SELECT * FROM Routines_1_Basic`;
  pool.query(query)
  .then((result)=>{
    res.send(req.user);
  })
  .catch((err) => {
    console.log("error in GET all Tasks", err);
    res.sendStatus(500);
  });
});
// -------------------------------------------------

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

  pool.query(insertNewTask[hacer.taskName, hacer.task_time_start, hacer.task_time_end, hacer.status, hacer.userId])
  .then((result) => {
    console.log('this is the result under the router.post', result);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
