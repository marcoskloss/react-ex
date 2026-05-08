import type { Task } from "../../App";
import "./TaskList.css";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (task: Task) => void;
};

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li className="task-item" key={task.text}>
            <span
              className={
                task.completed ? "task-text task-text--done" : "task-text"
              }
            >
              {task.text}
            </span>
            <button
              type="button"
              className="task-action"
              onClick={() => onToggleTask(task)}
            >
              {task.completed ? "Reabrir" : "Completar"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
