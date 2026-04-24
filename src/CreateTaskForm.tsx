import { useState } from "react";
import type { Task } from "./App";

type CreateTaskFormProps = {
  onSubmit: (task: Task) => void;
};

export function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleChangeTaskText(ev: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(ev.target.value);
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newTask.trim().length > 0) {
      const task: Task = {
        completed: false,
        text: newTask,
      };

      setNewTask("");
      onSubmit(task);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleChangeTaskText}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
