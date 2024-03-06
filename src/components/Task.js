// Task.js
import React from 'react';

function Task({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Task;
