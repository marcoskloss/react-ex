import { useState } from "react";
import type { Task } from "../../App";
import "./CreateTaskForm.css";

type CreateTaskFormProps = {
  onSubmit: (task: Task) => void;
};

export function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleChangeTaskText(ev: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(ev.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Escreva sua task aqui..."
        value={newTask}
        onChange={handleChangeTaskText}
      />
      <button className="task-submit" type="submit">
        + Add
      </button>
    </form>
  );
}
