import type { Task } from "./App";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (task: Task) => void;
};

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li style={{ display: "flex" }} key={task.text}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "",
              }}
            >
              {task.text}
            </span>
            <button
              style={{ marginLeft: "auto", width: "5rem" }}
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
