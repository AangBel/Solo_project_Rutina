import axios from "axios";
import { put, takeLatest, call,takeEvery } from "redux-saga/effects";

// function* fetchAllTasks(action) {
//   // get all tasks from the DB
//   try {
//     // const response = yield axios.get("/api/tasks");
//     const response = yield call(axios.get("/api/tasks"));
//     //is it fetchTasks.data or fetchTasks?
//     console.log("get all: aka response", response);
//     console.log("this is response.data:", response.data);

//     const tasks = response.data;

//     yield put({ type: "SET_TASKS", payload: tasks });
//   } catch (error) {
//     console.log("get all error", error);
//   }
// }
// function* fetchAllTasksSaga() {
//   yield takeLatest("FETCH_TASKS", fetchAllTasks);
// }

// export default fetchAllTasksSaga;



function* fetchAllTasks() {
  try {
    const response = yield call(() => axios.get("/api/tasks"));

    yield put({ type: "SET_TASKS", payload: response.data });
    // console.log('this is the response data in fetch all tasks generator function', response.data);
    // console.log('this is the response data.data in fetch all tasks generator function', response.data.data);

  } catch (error) {
    console.log("error fetching tasks", error);
  }
}

function* yieldSaga() {
  yield takeEvery("FETCH_TASKS", fetchAllTasks);
}

export default yieldSaga;

