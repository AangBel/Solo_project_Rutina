import axios from "axios";
import { put, takeLatest, call, takeEvery } from "redux-saga/effects";

//i wonder if i do one of those action, {task}?
// function* deleteTask(action) {
//   const taskToDelete = action.payload.task.id;
//   console.log("this is the task in the delete task saga", taskToDelete);
//   console.log('this is the action.payload', action.payload);

//   try {
//     console.log("in the try part of the delete task saga");
//     const deleteResponse = yield call(() =>
//       axios.delete(`/api/tasks/${taskToDelete}`)
//     );
//     yield put({ type: "SET_TASKS_AFTER_DELETE", payload: deleteResponse.data });
//     console.log(
//       "this is the delete response data in the delete task generator",
//       deleteResponse
//     );
//   } catch (error) {
//     console.log("error deleting a task", error);
//   }
// }

function* deleteTask(action) {
  const id = action.payload;
  console.log("this is id in the delete task under the saga", id);

  try {
    console.log("in the deleteTask generator function");
    const deleteResponse = yield call(() => axios.delete(`/api/tasks/${id}`));
    yield put({ type: "REMOVE_TASK", payload: id });
    console.log(
      "this is the response data in the delete response generator function",
      deleteResponse.data
    );
    yield put({ type: "FETCH_TASKS" });
  } catch (error) {
    console.log("error deleting task", error);
  }
}

function* yieldDelete() {
  console.log("in the yieldDelete generator function");
  yield takeEvery("DELETE_TASK", deleteTask);
}

// function* yieldDelete() {
//   console.log("in the yield for the delete");
//   yield takeEvery("DELETE_TASK", deleteTask);
// }

export default yieldDelete;
