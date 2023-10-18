import React from 'react';
import axios from 'axios';

const CompleteTask = ({ task }) => {
    const handleComplete = async () => {
        try {
            // Send PUT request to update task status
            await axios.put(`/api/tasks/${task.id}`, { status: true });
            // Update task object with new status
            task.status = true;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleComplete}>Complete</button>
            <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
                {task.name}
            </span>
        </div>
    );
};

export default CompleteTask;
