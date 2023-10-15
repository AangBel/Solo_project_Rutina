import React, { useState } from 'react';

console.log('this is a hello from the rightnow.jsx page');
import { useSelector } from "react-redux";


const taskStore = useSelector((state) => state.taskStore);

const RightNow = ({ taskStore }) => {
    console.log('this is tasks in the rightnow const', taskStore);
    const [activeTask, setActiveTask] = useState(null);

    const getCurrentTask = () => {
    console.log('this is hello from the getCurrent Task const');

        const now = new Date();
        console.log('this is now:', now);
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const startTime = new Date(task.startTime);
            const endTime = new Date(task.endTime);
            if (now >= startTime && now <= endTime) {
                setActiveTask(task);
                return;
            }
        }
        setActiveTask(null);
    };

    // Call getCurrentTask every minute to update the active task
    setInterval(getCurrentTask, 60000);

    return (
        <div>
            {activeTask ? (
                <div>
                    <h2>Active Task:</h2>
                    <p>{activeTask.name}</p>
                </div>
            ) : (
                <p>No active task right now.</p>
            )}
        </div>
    );
};

export default RightNow;
