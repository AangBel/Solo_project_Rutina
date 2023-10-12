import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { useDispatch } from "react-redux";

//trying this out- added ,{ dispatch } cuz co
function* addTaskSagaFn(action) {
  const payload = action.payload;
  // const dispatch = useDispatch();

  console.log("this is payload", payload);
  console.log("this is action.payload", action.payload);

  console.log("this is payload.task name", payload.task_name);
  // console.log("this is payload.taskTimeStart", payload.taskTimeStart);      //incorrect end tag
  console.log("this is payload.taskTimeStart", payload.task_time_start);

  // console.log("this is payload.taskTimeEnd", payload.taskTimeEnd); //incorrect end tag
  console.log("this is payload.taskTimeEnd", payload.task_time_end);


  try {
    //CHANGED FROM NEW ROUTINE TO PAYLOAD BC CONCERNED IT WAS RE-DECLARING IT AND MESSING THINGS UP
    // const newRoutine = payload;
    // send the task to the DB
    yield axios.post("/api/tasks", payload);

    //not sure about this one!
    // yield put(fetchAllTasks());
    yield put({ type: "FETCH_TASKS" });
    console.log('if this shows it means that the try{ of the addTasksSagaFn ran');

    // update the store with the new task
    //   yield fetchAllTasks;
  } catch (error) {
    console.log("error adding task:", error);
  }
}

// function* saveTaskWatcher() {
//   yield takeEvery("ADD_TASK", addTaskSagaFn);
// }

function* saveTaskWatcher() {
  yield takeEvery("ADD_TASK", addTaskSagaFn);
}


export default saveTaskWatcher;
