// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import './App.css';

const TASKS = [
  { id: 1, text: "Task 1", category: "Work" },
  { id: 2, text: "Task 2", category: "Personal" },
  { id: 3, text: "Task 3", category: "Work" },
  { id: 4, text: "Task 4", category: "Study" },
];

const CATEGORIES = ["All", "Work", "Personal", "Study"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task List App</h1>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
