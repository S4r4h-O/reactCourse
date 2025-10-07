import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import cssClasses from "./Todos.module.css";

function Todos({ items }: { items: Todo[] }) {
  return (
    <ul className={cssClasses.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Todos;
