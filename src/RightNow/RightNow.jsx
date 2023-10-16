import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import dayjs from "dayjs";


export default function RightNow() {
  console.log("in the right now fn");
  const taskStore = useSelector((state) => state.taskStore);
  console.log("this is task store in right now", taskStore);
  //   const dispatch = useDispatch();
  const [activeTask, setActiveTask] = useState("");

  //   const handleTaskSelect = (task) => {
  //     dispatch({ type: "SET_TASKS_SELECT", payload: task });
  const getCurrentTask = (task) => {
    console.log("this is task under get current task", task);
    console.log("this is activeTask:", activeTask);
    // handleTaskSelect();
    console.log("hello from get current task");

    const localTime = dayjs().format("YYYY-MM-DD"); // store localTime
    // const proposedDate = localTime + {task_time_start};
    console.log('this is proposedDate:', proposedDate);

    const now = new Date();
    console.log("this is now:", now);
    let hours = now.getHours();
    console.log("this is hours", hours);

    for (let i = 0; i < taskStore.length; i++) {
      const task = taskStore[i];
      const startTime = new Date(task.task_time_start);
      //   console.log("this is startTime", startTime);
      console.log("this is task.task_time_start:", task.task_time_start);

      const endTime = new Date(task.task_time_end);
      //   console.log("this is endTime", endTime);
      console.log("this is task.task_time_end:", task.task_time_end);

      if (now >= startTime && now <= endTime) {
        setActiveTask(task);
      }
    }
    setActiveTask(null);
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
