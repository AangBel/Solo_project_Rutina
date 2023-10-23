
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
  "task_time_start" TIMESTAMPTZ NOT NULL,
  "task_time_end" TIMESTAMPTZ NOT NULL,
  "status" BOOLEAN NOT NULL,
  "userId" INTEGER NOT NULL
);

CREATE TABLE "bells" (
	"id" SERIAL PRIMARY KEY,
	"timer_name" VARCHAR (20) NOT NULL,
	"time" VARCHAR (5) NOT NULL,
	"status" BOOLEAN NOT NULL,
  "userId" INTEGER NOT NULL
);