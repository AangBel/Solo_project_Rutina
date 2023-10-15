const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET route to retrieve all bells from the database
//added the reject authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM bells ORDER BY id ASC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("this is result from bells router", result);
      console.log("this is result.rows from bells router", result.rows);
      console.log("this is req", req);
      console.log("this is req.user", req.user);

      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error getting bells from database", error);
      res.sendStatus(500);
    });
});

// POST route to add a new bell to the database
router.post("/", (req, res) => {
  const newBell = req.body;
  const queryText = `INSERT INTO "bells" ("timer_name", "time", "status", "userId")
                                         VALUES ($1, $2, $3, $4)`;
  const queryValues = [
    newBell.timer_name,
    newBell.time,
    newBell.status,
    newBell.userId,
  ];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error adding new bell to database", error);
      res.sendStatus(500);
    });
});

// DELETE route to remove a bell from the database
router.delete("/:id", (req, res) => {
  const bellId = req.params.id;
  const queryText = `DELETE FROM "bells" WHERE "id" = $1`;
  pool
    .query(queryText, [bellId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error deleting bell from database", error);
      res.sendStatus(500);
    });
});

// PUT route to update a bell in the database
router.put("/:id", (req, res) => {
  const bellId = req.params.id;
  const updatedBell = req.body;
  const queryText = `UPDATE "bells" SET "timer_name" = $1, "time" = $2, "status" = $3, "userId" = $4,
                                         WHERE "id" = $5`;
  const queryValues = [
    updatedBell.timer_name,
    updatedBell.time,
    updatedBell.status,
    updatedBell.userId,
    bellId,
  ];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error updating bell in database", error);
      res.sendStatus(500);
    });
});

//Is it going to be an issue that this and the myday router have the same name of router?
module.exports = router;
