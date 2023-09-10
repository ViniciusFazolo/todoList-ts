import { TaskFormat } from "../TaskFormat";
import TasksButtons from "./TasksButtons";

type taskProps = {
  todo: TaskFormat;
  tasks: TaskFormat[];
  setTasks: React.Dispatch<React.SetStateAction<TaskFormat[]>>;
};

const Tasks = ({ todo, tasks, setTasks }: taskProps) => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row rounded-xl mb-4 px-3 bg-white py-3">
      <div className="overflow-x-auto max-w-[300px]">
        <h1
          className={
            todo.check ? "text-2xl my-2 line-through" : "text-2xl my-2"
          }
        >
          {todo.name}
        </h1>
      </div>
      <TasksButtons todo={todo} tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
