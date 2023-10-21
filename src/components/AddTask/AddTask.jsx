import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// CSS-----------------------------------------------------------
import "./AddTask.css";

// DAY.JS--------------------------------------------------------
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Chicago");

dayjs().format("LLLL");
dayjs.extend(localizedFormat); // Use localizedFormat here

// SWEET ALERT----------------------------------------------------
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

// ---------------------------------------------------------------

const AddTask = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [taskTimeStart, setTaskTimeStart] = useState("");
  const [taskTimeEnd, setTaskTimeEnd] = useState("");

  function addTaskEvent(event) {
    event.preventDefault();

    const localStartTime = dayjs(taskTimeStart).tz("America/Chicago").format();
    const localEndTime = dayjs(taskTimeEnd).tz("America/Chicago").format();

    const localStartTimeFormatted = dayjs(localStartTime).format(
      "MMM DD, YYYY h:mm A"
    );
    const localEndTimeFormatted = dayjs(localEndTime).format(
      "MMM DD, YYYY h:mm A"
    );

    const taskConst = {
      task_name: taskName,
      task_time_start: localStartTime,
      task_time_end: localEndTime,
      status: false,
      userId: 1,
    };

    MySwal.fire({
      title: "New Task Created",
      icon: "success",
      confirmButtonText: "Ok",
      showCloseButton: true,
      html: `
        <div>
          <p>Task Name: ${taskName}</p>
          <p>Start Time: ${localStartTimeFormatted}</p>
          <p>End Time: ${localEndTimeFormatted}</p>
        </div>
      `,
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.close) {
        dispatch({
          type: "ADD_TASK",
          payload: taskConst,
        });

        history.push("/MyDay");
      }
    });
  }

  function cancelAddTask() {
    history.push("/MyDay");
  }

  return (
    // <div className="container">
    //This one pushes the footer down
    <div className="my-day-container">
      {/* //this one resizes the card */}
      {/* <div className="AddTaskClass"> */}

      <div className="CardClassMapAdd">
        <div className="taskInput">
          {/* <div className="paper"> */}
          {/* <div className="content"> */}
          <h6>Task Name:</h6>
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
            onChange={(e) => setTaskTimeStart(e.target.value)}
            className="dateInput"
          />

          <h6>End Time:</h6>
          <input
            id="endTimeInput"
            type="datetime-local"
            onChange={(e) => setTaskTimeEnd(e.target.value)}
            className="dateInput"
          />

          <div className="button-containerTask">
            <button className="AddTaskButton" onClick={addTaskEvent}>
              Add Task
            </button>
            <button onClick={cancelAddTask} className="CancelBtn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default AddTask;
