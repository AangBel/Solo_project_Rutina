import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// export default function* fetchAllTasks(action) {
//   // get all tasks from the DB
//   try {
//     const fetchTasks = yield axios.get("/api/tasks");
//     //is it fetchTasks.data or fetchTasks?
//     console.log("get all: aka fetchTasks.data", fetchTasks.data);
//     console.log("get fetchTasks:", fetchTasks);

//     yield put({ type: "SET_TASKS", payload: fetchTasks.data });
//   } catch {
//     console.log("get all error");
//   }
// }

function* fetchAllTasks(action){
    try{
        yield axios.get('/api/tasks', action.payload);
        yield put({ type: 'SET_TASKS'});
    } catch (error) {
        console.log('error with get under fetch all tasks', error);
    }
}

function* yieldSaga(){
    yield takeLatest('SET_TASKS', fetchAllTasks);
}

export default yieldSaga;