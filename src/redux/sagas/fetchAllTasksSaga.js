import axios from "axios";
import { put } from "redux-saga/effects";


export default function* fetchAllTasks() {
    // get all tasks from the DB
    try {
      const fetchTasks = yield axios.get("/tasks");
      //is it fetchTasks.data or fetchTasks?
      console.log("get all:", fetchTasks.data);
      yield put({ type: "SET_TASKS", payload: fetchTasks.data });
    } catch {
      console.log("get all error");
    }
  }