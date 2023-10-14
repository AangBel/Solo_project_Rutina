
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "routines" (
  "id" SERIAL PRIMARY KEY,
  "task_name" VARCHAR (80) NOT NULL,
  "task_time_start" TIMESTAMP NOT NULL,
  "task_time_end" TIMESTAMP NOT NULL,
  "status" BOOLEAN NOT NULL,
  "userId" INTEGER NOT NULL
);

CREATE TABLE "Bells" (
	"id" SERIAL PRIMARY KEY,
	"timer_name" VARCHAR (20) NOT NULL,
	"time" INTEGER NOT NULL,
	"status" BOOLEAN NOT NULL
);