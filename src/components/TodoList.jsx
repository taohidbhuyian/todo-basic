import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="text-center">
      <div className="bg-light p-5">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="btn btn-primary ms-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul className="myvh">
        {tasks.map((task, index) => (
          <li className="bg-white w-25 mx-auto d-flex justify-content-between align-items-center p-2 mb-1" key={index}>
            <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"></input>
            <span className="taskDiscription">{task}</span>
            <button
              className="btn btn-danger mb-2"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
