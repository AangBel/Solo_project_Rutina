import React from "react";

const TaskCard = ({ task }) => {
  const date = new Date(task.due_date);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const hours = date.getHours() % 12 || 12; // Convert military time to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return (
    <div className="task-card">
      <h3>{task.task_name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {formattedDate}</p>
      <p>Due Time: {formattedTime}</p>
    </div>
  );
};

export default TaskCard;