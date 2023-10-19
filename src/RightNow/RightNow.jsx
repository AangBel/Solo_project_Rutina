import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./RightNow.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default function RightNow() {
  const taskReducer = useSelector((state) => state.taskReducer);
  console.log('this is task reducer', taskReducer);
  const [percentageFromTask, setPercentageFromTask] = useState(0);


  const storedActiveTask = localStorage.getItem("activeTask");
  // const initialActiveTask = storedActiveTask ? JSON.parse(storedActiveTask) : null;

  const [activeTask, setActiveTask] = useState('');

  const updateProgress = () => {
    const now = new Date();
    let activeTask = null;
    console.log('this is active Task at line 19', activeTask);

    for (let i = 0; i < taskReducer.length; i++) {
      const task = taskReducer[i];
      const startTime = new Date(task.task_time_start);
      const endTime = new Date(task.task_time_end);
      if (now >= startTime && now <= endTime) {
        activeTask = task;
        console.log('this is task at line 27', task);
        break;
      }
    }

    if (activeTask) {
      localStorage.setItem("activeTask", JSON.stringify(activeTask));
    }



    if (activeTask) {
      console.log('this is active task at line 31', activeTask);
      const durationTime = now - new Date(activeTask.task_time_start);
      const totalTime = new Date(activeTask.task_time_end) - new Date(activeTask.task_time_start);
      const percentTime = (durationTime / totalTime) * 100;
      setPercentageFromTask(percentTime);
    }
    setActiveTask(activeTask);
  };
  useEffect(() => {

    // Setting an interval to update progress every minute (60000 milliseconds)
    const intervalId = setInterval(updateProgress, 60000);

    // Call it once on component mount
    updateProgress();

    // Clearing the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeTask]);

  return (
    <>
    <div className="extendSizeofRNpage">

    
      <div className="taskNameDivClass">
        {activeTask ? (
          <div className="RightNowText">
            <h2 className="activeTaskText">Active Task:</h2>
            <p className="taskName">{activeTask.task_name}</p>
          </div>
        ) : (
          <p>No active task right now.</p>
        )}
      </div>
      <div className="circleClass">
      <div className="divAboveCircle" style={{ width: 600, height: 600 }}>
        <CircularProgressbar value={percentageFromTask} text={`${percentageFromTask.toFixed(2)}%`} />
      </div>

      </div>
      </div>
    </>
  );
}
