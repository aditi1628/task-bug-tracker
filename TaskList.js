import React from "react";
import "../styles/TaskList.css"; // Importing the TaskList.css file

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
            <p>
              <strong>Assignee:</strong> {task.assignee}
            </p>
            <p>
              <strong>Due Date:</strong> {task.dueDate}
            </p>

            <button
              onClick={() => onDeleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
            <button
              onClick={() => onEditTask(task.id, { status: "In Progress" })}
              className="edit-button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
