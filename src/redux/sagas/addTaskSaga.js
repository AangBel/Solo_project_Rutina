import axios from "axios";
import fetchAllTasks from "./fetchAllTasksSaga";

export default function* addTaskSaga(action) {
    const payload = action.payload;
    console.log("this is payload", payload);
    console.log("this is task name", payload.task_name);
    console.log("this is payload.taskTimeStart", payload.taskTimeStart);
    console.log("this is payload.taskTimeEnd", payload.taskTimeEnd);
  
    try {
      const newRoutine = payload;
      // send the task to the DB
      yield axios.post("/tasks", newRoutine);
      // update the store with the new task
      yield fetchAllTasks;
    } catch (error) {
      console.log("get tasks error:", error);
    }
  }