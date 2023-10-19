import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddTask.css";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Chicago");

const AddTask = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [taskTimeStart, setTaskTimeStart] = useState("");
  const [taskTimeEnd, setTaskTimeEnd] = useState("");

  // Function to format a date object as a time string in 12-hour format
  // const formatTime = (date) => {
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const ampm = hours >= 12 ? "PM" : "AM";
  //   const formattedHours = hours % 12 || 12;
  //   const formattedMinutes = minutes.toString().padStart(2, "0");
  //   return `${formattedHours}:${formattedMinutes} ${ampm}`;
  // };

  function addTaskEvent(event) {
    event.preventDefault();

    // Convert the input values to Date objects
    // const startTime = new Date(taskTimeStart);
    // const endTime = new Date(taskTimeEnd);

    // Format the time in 12-hour format
    // const formattedStartTime = formatTime(startTime);
    // const formattedEndTime = formatTime(endTime);

    // const localStartTime = dayjs(taskTimeStart).utc().format();
    const localStartTime = dayjs(taskTimeStart).tz("America/Chicago").format();
    console.log('this is local Start time:', localStartTime);

    // const localEndTime = dayjs(taskTimeEnd).utc().format();
    const localEndTime = dayjs(taskTimeEnd).tz("America/Chicago").format();

    console.log('this is local end time:', localEndTime);


    const taskConst = {
      task_name: taskName,
      task_time_start: localStartTime,
      task_time_end: localEndTime,
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
            className="textInput"
          />

          <h6>Start Time:</h6>
          <input
            id="startTimeInput"
            type="datetime-local"
            // type="time"
            onChange={(e) => setTaskTimeStart(e.target.value)}
          />

          <h6>End Time:</h6>
          <input
            id="endTimeInput"
            type="datetime-local"
            // type="time"
            onChange={(e) => setTaskTimeEnd(e.target.value)}
          />

          <div className="button-container-add-task">
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
