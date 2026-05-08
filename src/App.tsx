import { useState } from "react";
import "./App.css";
import { CreateTaskForm } from "./components/CreateTaskForm/CreateTaskForm";
import { TaskList } from "./components/TaskList/TaskList";

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
    <div className="app">
      <h1 className="app-title">Minhas tarefas</h1>
      <CreateTaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
