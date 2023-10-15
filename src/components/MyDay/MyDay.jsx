import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./MyDay.css";
import RightNow from "../../RightNow/RightNow";

// import TaskCard from "../TaskCard/TaskCard";


export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();

  const taskStore = useSelector((state) => state.taskStore);
  console.log('this is task store:', taskStore);

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

  function editTaskOnClick(task) {
    console.log("clicked to edit task");
    handleEditTask(task);
  }
  const handleEditTask = (task) => {
    dispatch({ type: "EDIT_TASK", payload: task });
    console.log("this is the task in handleEdit task", task);
    console.log("this is the task in handleEdit task.id", task.id);
  };

  function deleteTaskOnClick(task) {
    console.log("clicked the delete button");
    dispatch({ type: "DELETE_TASK", payload: task });
  }

  return (
    <>
      <header style={{ background: "#CEE9f1" }}>
        <div className="toolbar">
          {/* <button className="learn-more">Today</button> */}
          <button className="learn-more" onClick={AddTaskOnClick}>
            Add Task
          </button>
        </div>
      </header>

      <div style={{ marginBottom: "90px", flexGrow: 1 }}>
        <section className="tasksClass">
          <RightNow tasks={taskStore} />
          <div className="CardClassMap">
            {taskStore.map((task) => (
              <div key={task.id} className="card shadow">
                <div
                  style={{ backgroundColor: "#f0f0f0", marginBottom: "16px" }}
                >
                  <div className="card-content">
                    <h5>{task.task_name}</h5>
                    <ul>
                      <li>{`Start Time: ${task.task_time_start}`}</li>
                      <li>{`End Time: ${task.task_time_end}`}</li>
                    </ul>
                
                    <button className="learn-more" onClick={() => editTaskOnClick(task.id)}>
                      EDIT
                    </button>
                    <button className="learn-more" onClick={() => deleteTaskOnClick(task.id)}>
                      DELETE
                    </button>
                    <button className="learn-more">COMPLETE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
