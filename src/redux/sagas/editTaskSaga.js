import axios from "axios";
import { put, takeLatest, call, takeEvery } from "redux-saga/effects";
import { useSelector } from "react-redux";


// function* editTask(action) {
//   const task = action.payload.task.id;
//   console.log("this is task in the edit task under the saga", task);

//   try {
//     //should i change the url to //(`/api/tasks/${task.id}`)??
//     console.log("in the editTask generator function");
//     const editResponse = yield call(() => axios.put(`/api/tasks/${task}`));
//     yield put({ type: "SET_EDIT_TASK", payload: editResponse.data });
//     console.log(
//       "this is the response data in the edit response generator function",
//       editResponse.data
//     );
//   } catch (error) {
//     console.log("error fetching tasks", error);
//   }
// }

function* editTask(action) {
  const selectedTaskId = useSelector(store => store.selectedTaskId);
  console.log('this is selected task id store:', selectedTaskId);
  const task = action.payload;
  console.log('this is task in edit task saga', task);

  try {
    const editResponse = yield call(() =>
      axios.put(`/api/tasks/${selectedTaskId}`, task)
    );
    // yield put({ type: "EDIT_TASK_ONCHANGE", payload: editResponse.data });
    console.log('this is editResponse.data from edit task saga', editResponse.data)
  } catch (error) {
    console.log("error editing task", error);
  }
}

function* yieldEdit() {
  console.log("in the yieldEdit generator function");


  yield takeEvery("EDIT_TASK_ONCHANGE", editTask);

}

export default yieldEdit;
