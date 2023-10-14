import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./AddTask.css"; // Replace with the path to your CSS file

const AddTask = () => {
  console.log("in the MyDay function");
  const history = useHistory();
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [taskTimeStart, setTaskTimeStart] = useState("");
  const [taskTimeEnd, setTaskTimeEnd] = useState("");

  function addTaskEvent(event) {
    event.preventDefault();

    const taskConst = {
      task_name: taskName,
      task_time_start: taskTimeStart,
      task_time_end: taskTimeEnd,
      status: false,
      userId: 1,
    };
    dispatch({
      type: "ADD_TASK",
      payload: taskConst,
    });
    history.push("/MyDay");
  }

  function cancelAddTask() {
    history.push("/MyDay");
  }

  return (
    <div className="container">
      <div className="paper">
        <div className="content">
          <h6>Task Name</h6>
          <input
            id="taskNameInput"
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
          />

          <h6>Start Time:</h6>
          <input
            id="startTimeInput"
            type="datetime-local"
            onChange={(e) => setTaskTimeStart(e.target.value)}
          />

          <h6>End Time:</h6>
          <input
            id="endTimeInput"
            type="datetime-local"
            onChange={(e) => setTaskTimeEnd(e.target.value)}
          />

          <div className="button-container">
            <button className="AddTaskButton" onClick={addTaskEvent}>
              Add Task To Routine
            </button>
            <button onClick={cancelAddTask}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
