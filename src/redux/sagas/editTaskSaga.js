import axios from "axios";
import { put, takeLatest, call, takeEvery } from "redux-saga/effects";

function* editTask(action) {
    const task = action.payload.task.id;
    console.log('this is task in the edit task under the saga', task);

  try {
    //should i change the url to //(`/api/tasks/${task.id}`)??
    console.log("in the editTask generator function");
    const editResponse = yield call(() => axios.put("/api/tasks"));
    yield put({ type: "SET_EDIT_TASK", payload: editResponse.data });
    console.log(
      "this is the response data in the edit response generator function",
      editResponse.data
    );
  } catch (error) {
    console.log("error fetching tasks", error);
  }
}

function* yieldEdit() {
  console.log("in the yieldEdit generator function");
  yield takeEvery("EDIT_TASK", editTask);
}

export default yieldEdit;
