import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="mb-6 text-gray-600">
        Organize your tasks efficiently and stay on track.
      </p>
      <button
        onClick={() => navigate("/tasks")}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((task) => (task.id === updated.id ? updated : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/tasks" element={<Home tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/create" element={<CreateTask addTask={addTask} />} />
          <Route path="/edit/:id" element={<EditTask tasks={tasks} updateTask={updateTask} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
