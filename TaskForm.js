import React, { useState } from "react";
import "../styles/TaskForm.css"; // Importing the TaskForm.css file

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");

  // Optional: Error states
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!title || !description || !priority || !dueDate || !status) {
      if (!title) setTitleError(true);
      if (!description) setDescriptionError(true);
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      assignee,
      dueDate,
      status,
    };
    onAddTask(newTask);

    // Reset form after submission
    setTitle("");
    setDescription("");
    setPriority("");
    setAssignee("");
    setDueDate("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setTitleError(false); // Reset error when the user starts typing
        }}
        required
        className={titleError ? "error" : ""}
      />
      {titleError && <div className="error-message">Title is required</div>}

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setDescriptionError(false); // Reset error when the user starts typing
        }}
        required
        className={descriptionError ? "error" : ""}
      />
      {descriptionError && (
        <div className="error-message">Description is required</div>
      )}

      <label>Priority:</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <label>Assignee:</label>
      <input
        type="text"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />

      <label>Due Date:</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />

      <label>Status:</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="">Select Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
