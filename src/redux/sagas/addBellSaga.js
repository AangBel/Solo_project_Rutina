import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker saga
function* addBell(action) {
  //can i have more than one action.payload?
  const bellPayload = action.payload;
  console.log("in the add bell generator function in the add Bell Saga");
  try {
    // POST request to add bell to database
    // yield axios.post('/api/bells', action.payload);
    yield axios.post("/api/bells", bellPayload);

    // dispatch success action
    yield put({ type: "FETCH_BELLS" });
    console.log(
      "if this shows it means that the try{ of the addBell saga ran"
    );
  } catch (error) {
    console.log('this is an error message from the addBell saga under try');
    // dispatch error action
  }
}

// watcher saga
function* addBellSaga() {
  yield takeLatest("ADD_BELL", addBell);
}

export default addBellSaga;
