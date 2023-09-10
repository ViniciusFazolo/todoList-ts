import { useEffect, useState } from "react";
import Input from "./components/Input";
import { TaskFormat } from "./TaskFormat";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState<TaskFormat[]>(getTasks());

  function getTasks() {
    let list = localStorage.getItem("tasks");

    if (list) return JSON.parse(list);
    else return [];
  }

  function saveTasksLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  useEffect(() => {
    saveTasksLocalStorage();
  }, [tasks]);

  return (
    <main className="mt-8">
      <h1 className="mb-3 font-mono text-3xl text-center">Todo List</h1>
      <section className="max-w-[600px] h-auto m-auto p-4">
        <Input tasks={tasks} setTasks={setTasks} />

        <div className="mt-5">
          {tasks.map((todo) => (
            <Tasks
              todo={todo}
              tasks={tasks}
              setTasks={setTasks}
              key={todo.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
