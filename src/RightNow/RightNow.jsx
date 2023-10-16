import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

dayjs().format("L LT");

export default function RightNow() {
  console.log("in the right now fn");

  // const test = dayjs().toDate();
  // console.log('this is test', test);

  // const test3 = dayjs().toString();
  // console.log('this is test 3 of date to string', test3);

  // const localized = dayjs().format('LLLL');
  // console.log('this is localized:', localized);

  // const taskStore = useSelector((state) => state.taskStore);
  // console.log("this is task store in right now", taskStore);

  const taskReducer = useSelector((state) => state.taskReducer);
  console.log("this is task reducer in right now", taskReducer);

  //   const dispatch = useDispatch();
  // const [activeTask, setActiveTask] = useState("");
  let [activeTask, setActiveTask] = useState("");


  useEffect(() => {
    getCurrentTask();
  }, []);
  //   const handleTaskSelect = (task) => {
  //     dispatch({ type: "SET_TASKS_SELECT", payload: task });
  const getCurrentTask = (task) => {
    console.log("this is task under get current task", task);
    console.log("this is activeTask:", activeTask);
    // handleTaskSelect();
    
    // const localTime = dayjs().format("YYYY-MM-DD"); // store localTime
    // console.log("this is local Time", localTime);
    // const proposedDate = localTime + {task_time_start};
    // console.log('this is proposedDate:', proposedDate);

    // let hours = now.getHours();
    // console.log("this is hours", hours);
    
    for (let i = 0; i < taskReducer.length; i++) {
      const now = new Date();
      console.log("this is now:", now);
      const task = taskReducer[i];
      console.log('this is task in the for loop:', task);
      const startTime = new Date(task.task_time_start);
      console.log("this is startTime", startTime);
      // console.log("this is task.task_time_start:", task.task_time_start);

      const endTime = new Date(task.task_time_end);
      console.log("this is endTime", endTime);
      // console.log("this is task.task_time_end:", task.task_time_end);

      if (now >= startTime && now <= endTime) {
        setActiveTask(task);
        const setActive = setActiveTask(task);
        console.log('this is setActive task in the if:', setActive);
        console.log("this is activeTask:", activeTask);
      }
    }
  
  };

  // setInterval(getCurrentTask, 60000);


  return (
    <div>
      {activeTask ? (
        <div>
          <h2>Active Task:</h2>
          <p>{activeTask.task_name}</p>
        </div>
      ) : (
        <p>No active task right now.</p>
      )}
    </div>
  );
}
