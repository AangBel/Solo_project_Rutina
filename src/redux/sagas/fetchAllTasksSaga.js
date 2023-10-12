import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchAllTasks(action) {
  // get all tasks from the DB
  try {
    const response = yield axios.get("/api/tasks");
    //is it fetchTasks.data or fetchTasks?
    console.log("get all: aka response", response);
    console.log("this is response.data:", response.data);

    yield put({ type: "SET_TASKS", payload: response.data });
  } catch (error) {
    console.log("get all error");
  }
}



function* yieldSaga() {
  yield takeLatest("GET_TASKS", fetchAllTasks);
}

export default yieldSaga;
