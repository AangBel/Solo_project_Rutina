import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";

import "./MyDay.css";

import { PacmanLoader } from "react-spinners";

import sun from "../images/sun.svg";
import moon from "../images/moon.png";


const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

dayjs().format("L LT");

const localTime = dayjs().format("YYYY-MM-DD"); // store localTime
console.log("this is local Time", localTime);

const localized = dayjs().format("LLLL");
console.log("this is localized:", localized);

const now = new Date();
console.log("this is now:", now);

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.isLoading);

  const taskReducer = useSelector((state) => state.taskReducer);
  console.log("this is task store:", taskReducer);

  useEffect(() => {
    dispatch({ type: "FETCH_TASKS" });
  }, []);

  const handleTaskSelect = (task) => {
    dispatch({ type: "SET_TASKS_SELECT", payload: task });
  };

  function AddTaskOnClick() {
    handleTaskSelect();
    console.log("clicked add task");
    history.push("/AddTask");
  }
  //this takes into the SelectedTaskToedit action with a payload with the id of task
  function editTaskOnClick(task) {
    console.log("clicked to edit task");
    handleEditTask(task);
  }
  const handleEditTask = (taskId) => {
    // dispatch({ type: "EDIT_TASK", payload: task });
    dispatch({ type: "SELECTED_TASK_TO_EDIT", payload: taskId });
    history.push('/EditTask');
  };

  function deleteTaskOnClick(task) {
    console.log("clicked the delete button");
    console.log("this is the task to be deleted:", task);
    dispatch({ type: "DELETE_TASK", payload: task });
  }

  function completeTaskOnClick(task) {
    console.log("clicked the complete button");
    dispatch({ type: "COMPLETE_TASK", payload: task });
  }

  function startTimeConverted(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  return (
    <>
    <div className="headerClass">

      <header className="myDayHeaderClass">
        <h1 className="timeColor">{localized}</h1>
        {/* <div className="toolbar"> */}
        {/* <button className="learn-more">Today</button> */}
        {/* <img className="moonClass" src={moon}></img>
          <img className="sunClass" src={sun}></img> */}
        {/* </div> */}
      </header>
          </div>
      {/* //make this time live? */}
      {/* setInterval(localized, 60000); */}

      <div className="my-day-container">
        <div className="AddTaskClass">

        <button className="learn-more" onClick={AddTaskOnClick}>
          Add Task
        </button>
        </div>
        <div style={{ marginBottom: "90px", flexGrow: 1 }}>
        {isLoading ? (
            <div className="loader-container">
              <PacmanLoader color={"#123abc"} loading={isLoading} />
            </div>
          ) : (
          <section className="tasksClass">
            <div tasks={taskReducer}></div>
            <div className="CardClassMap">
              {taskReducer.map((task) => (
                <div key={task.id} className="card shadow">
                  <div
                    style={{ backgroundColor: "#f0f0f0", marginBottom: "16px" }}
                  >
                    <div className="card-content">
                      <h5 className="taskTextClass">{task.task_name}</h5>
                      <ul>
                        {/* <li>{`Start Time: ${task.task_time_start}`}</li> */}
                        <li>{`Start Time: ${startTimeConverted(
                          task.task_time_start
                        )}`}</li>
                        <li>{`End Time: ${startTimeConverted(
                          task.task_time_end
                        )}`}</li>
                        {/* <li>{`End Time: ${task.task_time_end}`}</li> */}
                      </ul>

                      <button
                        className="learn-more"
                        onClick={() => editTaskOnClick(task.id)}
                      >
                        EDIT
                      </button>
                      <button
                        className="learn-more"
                        onClick={() => deleteTaskOnClick(task.id)}
                      >
                        DELETE
                      </button>
                      <button
                        className="learn-more"
                        onClick={() => completeTaskOnClick(task.id)}
                      >
                        COMPLETE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          )}
        </div>
      </div>
    </>
  );
}
