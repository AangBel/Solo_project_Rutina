import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// Action Types
// const DELETE_BELL_REQUEST = "DELETE_BELL_REQUEST";
// const DELETE_BELL_SUCCESS = 'DELETE_BELL_SUCCESS';
// const DELETE_BELL_FAILURE = 'DELETE_BELL_FAILURE';

// Action Creators
// export const deleteBellRequest = (id) => ({
//   type: DELETE_BELL_REQUEST,
//   payload: id,
// });

// API Request
// const deleteBellApi = (id) => axios.delete(`/api/bells/${id}`);

// Saga Worker
// function* deleteBellWorker(action) {
//   try {
//     yield call(deleteBellApi, action.payload);
//     yield put({ type: "FETCH_BELLS" });
//   } catch (error) {
//     console.log("error deleting task", error);
//   }
// }

function* deleteBellWorker(action) {
  const bellId = action.payload;
  console.log('this is the bell id under the saga', bellId);

  try {
    console.log('in the delete bell gen fn!');
    const deleteBellResponse = yield call(() => axios.delete(`/api/bells/${bellId}`));
    yield put({ type: "DELETE_BELL_REQUEST", payload: bellId });
    console.log('this is the response data in the delete bell response gn fn', deleteBellResponse.data);
    yield put ({ type: "FETCH_BELLS" });
  } catch (error) {
    console.log("error deleting bell", error);
  }
}

// Saga Watcher
function* deleteBellWatcher() {
    //take Latest or takeEvery??????
  // yield takeLatest("DELETE_BELL_REQUEST", deleteBellWorker);
  console.log("in the deleteBellWatcher function");

  yield takeEvery("DELETE_BELL_REQUEST", deleteBellWorker);

}

export default deleteBellWatcher;
