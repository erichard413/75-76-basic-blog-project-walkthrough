export function TodoItem({ completed, title }) {
  return <li className={completed ? "strike-through" : ""}>{title}</li>;
}
