import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../redux/store";
import "./MyDay.css";

export default function MyDay() {
  console.log("in the MyDay function");
  const dispatch = useDispatch();
  const history = useHistory();

  const taskStore = useSelector((state) => state.taskStore);

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
    console.log('this is the task in handleEdit task', task);
    // console.log('this is the task id in handleEdit task', task.id);

  };
  // function editTaskOnClick() {
  //   const taskToEdit = taskStore.find((task) => task.id === taskStore.id);
  //   handleEditTask(taskToEdit);
  //   console.log("clicked to edit task");
  // }

  return (
    <>
      <header style={{ background: "#CEE9f1" }}>
        <div className="toolbar">
          <button className="custom-button">Today</button>
          <button className="custom-button" onClick={AddTaskOnClick}>
            Add Task
          </button>
        </div>
      </header>

      <div style={{ marginBottom: "90px", flexGrow: 1 }}>
        <section className="tasksClass">
          <div className="flip-horizontal-bottom">
            {taskStore.map((task) => (
              <div key={task.id} className="task-card">
                <div
                  style={{ backgroundColor: "#f0f0f0", marginBottom: "16px" }}
                >
                  <div className="card-content">
                    <h5>{task.task_name}</h5>
                    <ul>
                      <li>{`Start Time: ${task.task_time_start}`}</li>
                      <li>{`End Time: ${task.task_time_end}`}</li>
                    </ul>
                    <button onClick={() => editTaskOnClick(task.id)}>✏️</button>
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
