import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { TaskFormat } from "../TaskFormat";
type tasks = {
  todo: TaskFormat;
  tasks: TaskFormat[];
  setTasks: React.Dispatch<React.SetStateAction<TaskFormat[]>>;
};

const TasksButtons = ({ todo, tasks, setTasks }: tasks) => {
  const handleDelete = (id: number) => {
    const filteredTasks = tasks.filter((item) => id !== item.id);
    setTasks(filteredTasks);
  };

  const todoCheck = (id: number) => {
    const checkTodo = tasks.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setTasks(checkTodo);
  };

  return (
    <div className="flex items-center text-white">
      <div
        className="mr-3 bg-red-500 px-2 py-1 rounded-xl md:hover:bg-red-800 cursor-pointer"
        onClick={() => handleDelete(todo.id)}
      >
        <AiOutlineClose />
      </div>
      <div
        className="bg-green-500 px-2 py-1 rounded-xl mr-3 md:hover:bg-green-800 cursor-pointer"
        onClick={() => todoCheck(todo.id)}
      >
        <AiOutlineCheck />
      </div>
    </div>
  );
};

export default TasksButtons;
