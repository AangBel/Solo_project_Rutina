import axios from "axios";
import { put, takeLatest, call,takeEvery } from "redux-saga/effects";

function* editTask(){
    try {
        const editResponse = yield call(() => axios.put("/api/tasks"));
        yield put({ type: "SET_EDIT_TASK", payload: editResponse.data })
        console.log('this is the response data in the edit response generator function', editResponse.data);
    } catch (error) {
        console.log('error fetching tasks', error);
    }
}

function* yieldEdit(){
    yield takeEvery("EDIT_TASK", editTask);
}

export default yieldEdit;