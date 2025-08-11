import TaskForm from "../components/Form";
import { useNavigate } from "react-router-dom";

const CreateTask = ({ addTask }) => {
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTask;
