import Todo from "../models/todo";
import cssClasses from "./TodoItem.module.css";

type Props = {
  item: Todo;
  onRemove: () => void;
};

export default function TodoItem({ item, onRemove }: Props) {
  return (
    <li className={cssClasses.item} onClick={onRemove}>
      {item.text}
    </li>
  );
}
