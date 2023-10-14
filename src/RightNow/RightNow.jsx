import React, { useState } from 'react';

const RightNow = ({ tasks }) => {
    const [activeTask, setActiveTask] = useState(null);

    const getCurrentTask = () => {
        const now = new Date();
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
