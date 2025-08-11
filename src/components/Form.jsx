import { useState } from "react";

const TaskForm = ({ onSubmit, initialData }) => {
  const [task, setTask] = useState(
    initialData || { name: "", status: "Pending", dueDate: "" }
  );

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) {
      alert("Task name is required");
      return;
    }
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded space-y-3">
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        className="w-full border p-2 rounded"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
