import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';

export default function RightNow() {
  console.log("in the right now fn");
  const taskStore = useSelector((state) => state.taskStore);
  console.log('this is task store in right now', taskStore);
  const [activeTask, setActiveTask] = useState(null);

  const getCurrentTask = () => {
    console.log('hello from get current task');

    const now = new Date();
    console.log('this is now:', now);

    for (let i = 0; i < taskStore.length; i++) {
        const task = taskStore[i];
        const startTime = new Date(task.startTime);
        console.log('this is startTime', startTime);

        const endTime = new Date(task.endTime);
        console.log('this is endTime', endTime); 
        
        if (now >= startTime && now <= endTime) {
            setActiveTask(task);
            return;
        }
    }
}

}
