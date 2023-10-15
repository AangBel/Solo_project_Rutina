import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// Action Types
const DELETE_BELL_REQUEST = "DELETE_BELL_REQUEST";
// const DELETE_BELL_SUCCESS = 'DELETE_BELL_SUCCESS';
// const DELETE_BELL_FAILURE = 'DELETE_BELL_FAILURE';

// Action Creators
export const deleteBellRequest = (id) => ({
  type: DELETE_BELL_REQUEST,
  payload: id,
});

// API Request
const deleteBellApi = (id) => axios.delete(`/api/bells/${id}`);

// Saga Worker
function* deleteBellWorker(action) {
  try {
    yield call(deleteBellApi, action.payload);
    yield put({ type: "FETCH_BELLS" });
  } catch (error) {
    console.log("error deleting task", error);
  }
}

// Saga Watcher
function* deleteBellWatcher() {
    //take Latest or takeEvery??????
  yield takeLatest(DELETE_BELL_REQUEST, deleteBellWorker);
}

export default deleteBellWatcher;
