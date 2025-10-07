import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import cssClasses from "./Todos.module.css";

type Props = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

function Todos({ items, onRemoveTodo }: Props) {
  return (
    <ul className={cssClasses.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
