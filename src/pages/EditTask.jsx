import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/Form";

const EditTask = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  const handleSubmit = (updated) => {
    updateTask({ ...updated, id: task.id });
    navigate("/");
  };

  if (!task) return <p className="text-red-500">Task not found</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <TaskForm onSubmit={handleSubmit} initialData={task} />
    </div>
  );
};

export default EditTask;
