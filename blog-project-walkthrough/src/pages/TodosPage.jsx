import { useLoaderData } from "react-router";
import { getTodos } from "../api/todos";
import { TodoItem } from "../components/TodoItem";

function TodosPage() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            completed={todo.completed}
            title={todo.title}
          />
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodosPage />,
};
