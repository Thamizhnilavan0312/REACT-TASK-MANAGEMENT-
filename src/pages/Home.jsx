import { Link } from "react-router-dom";
import TaskTable from "../components/Table";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Home = ({ tasks, deleteTask }) => {
  const exportToCSV = () => {
    if (!tasks || tasks.length === 0) {
      alert("No tasks to export!");
      return;
    }

    // Convert tasks to worksheet
    const worksheet = XLSX.utils.json_to_sheet(tasks);

    // Generate CSV data instead of XLSX
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);

    // Create Blob and trigger download
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "tasks.csv");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>

        <div className="flex gap-2">
          <Link
            to="/create"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Task
          </Link>

          <button
            onClick={exportToCSV}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Download CSV
          </button>
        </div>
      </div>

      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
