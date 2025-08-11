import { Link } from "react-router-dom";
import { useState } from "react";

const TaskTable = ({ tasks, deleteTask }) => {
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        className="border p-2 mb-3 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Task Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Due Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((task) => (
              <tr key={task.id} className="text-center">
                <td className="border p-2">{task.name}</td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2">{task.dueDate}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <Link
                    to={`/edit/${task.id}`}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-gray-500">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
