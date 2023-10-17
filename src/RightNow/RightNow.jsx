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
  const [percentageFromTask, setPercentageFromTask] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      for (let i = 0; i < taskReducer.length; i++) {
        const task = taskReducer[i];
        const startTime = new Date(task.task_time_start);
        const endTime = new Date(task.task_time_end);
        if (now >= startTime && now <= endTime) {
          const durationTime = now - startTime;
          const totalTime = endTime - startTime;
          const percentTime = (durationTime / totalTime) * 100;
          setPercentageFromTask(percentTime);
        }
      }
    };

    // Set an interval to update progress every minute (60000 milliseconds)
    const intervalId = setInterval(updateProgress, 60000);

    // Call it once on component mount
    updateProgress();

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [taskReducer]);

  return (
    <>
      <div>
        <p>Space for things</p>
      </div>
      <div>
        {taskReducer.length > 0 ? (
          <div>
            <h2>Active Task:</h2>
            <p>{taskReducer[0].task_name}</p>
          </div>
        ) : (
          <p>No active task right now.</p>
        )}
      </div>
      <div>
        <CircularProgressbar value={percentageFromTask} text={`${percentageFromTask.toFixed(2)}%`} />
      </div>
    </>
  );
}
