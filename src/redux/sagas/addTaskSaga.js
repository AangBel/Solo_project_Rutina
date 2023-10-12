import axios from "axios";
import fetchAllTasks from "./fetchAllTasksSaga";
import {put, takeEvery} from 'redux-saga/effects';

function* addTaskSagaFn(action) {
    const payload = action.payload;
    console.log("this is payload", payload);
    console.log("this is task name", payload.task_name);
    console.log("this is payload.taskTimeStart", payload.taskTimeStart);
    console.log("this is payload.taskTimeEnd", payload.taskTimeEnd);
  
    try {
      const newRoutine = payload;
      // send the task to the DB
      yield axios.post("/api/tasks", newRoutine);

      //not sure about this one!
      yield put(fetchAllTasks());

      // update the store with the new task
    //   yield fetchAllTasks;
    } catch (error) {
      console.log("get tasks error:", error);
    }
  }

function* saveTaskWatcher(){
    yield takeEvery('ADD_TASK', addTaskSagaFn);
}

  export default addTaskSagaFn;