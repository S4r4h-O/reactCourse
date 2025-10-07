import Todo from "../models/todo";
import TodoItem from "./TodoItem";

function Todos({ items }: { items: Todo[] }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Todos;
