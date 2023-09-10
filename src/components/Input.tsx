import { useState } from "react";
import { TaskFormat } from "../TaskFormat";

type setTaskProps = {
  tasks: TaskFormat[];
  setTasks: React.Dispatch<React.SetStateAction<TaskFormat[]>>;
};

const Input = ({ tasks, setTasks }: setTaskProps) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTask === "") return;

    setTasks([
      ...tasks,
      { id: Math.floor(Math.random() * 10000), name: newTask, check: false },
    ]);
    setNewTask("");
  };

  return (
    <form className="flex rounded-xl" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="digite uma tarefa"
        className="bg-white w-full pl-4 rounded-tl-xl rounded-bl-xl"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-4 bg-blue-400 text-white  rounded-tr-xl rounded-br-xl md:hover:bg-blue-800"
      >
        enviar
      </button>
    </form>
  );
};

export default Input;
