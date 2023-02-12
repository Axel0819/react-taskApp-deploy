import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-white text-2xl mb-3 font-bold text-center">
          Crea una tarea
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escriba la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escriba la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 text-white px-4 py-2 font-bold rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
