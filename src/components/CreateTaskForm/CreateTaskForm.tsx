import { useState } from "react";
import type { Task } from "../../App";
import "./CreateTaskForm.css";

type CreateTaskFormProps = {
  onSubmit: (task: Task) => void;
};

export function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  function handleChangeTaskText(ev: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(ev.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isBlank = newTask.trim().length === 0;

    if (isBlank) {
      setError("Preencha o campo");
    } else {
      const task: Task = {
        completed: false,
        text: newTask,
      };

      setNewTask("");
      setError("");
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
      <small style={{ color: "red" }}>{error}</small>
    </form>
  );
}
