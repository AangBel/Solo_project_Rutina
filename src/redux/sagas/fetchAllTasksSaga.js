import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

function* fetchAllTasks(action) {
  // get all tasks from the DB
  try {
    // const response = yield axios.get("/api/tasks");
    const response = yield call(axios.get("/api/tasks"));
    //is it fetchTasks.data or fetchTasks?
    console.log("get all: aka response", response);
    console.log("this is response.data:", response.data);

    const tasks = response.data;
//chnage p
    yield put({ type: "SET_TASKS", payload: tasks });
  } catch (error) {
    console.log("get all error", error);
  }
}



function* fetchAllTasksSaga() {
  yield takeLatest("FETCH_TASKS", fetchAllTasks);
}

export default fetchAllTasksSaga;
