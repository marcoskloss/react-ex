import { useState } from "react";
import "./App.css";
import { CreateTaskForm } from "./CreateTaskForm";
import { TaskList } from "./TaskList";

export type Task = {
  text: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleToggleTask(task: Task) {
    const updatedTasks = tasks.map((t) => {
      if (t === task) t.completed = !t.completed;
      return t;
    });
    setTasks(updatedTasks);
  }

  function handleAddTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <h1>Minhas tarefas</h1>
      <CreateTaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
