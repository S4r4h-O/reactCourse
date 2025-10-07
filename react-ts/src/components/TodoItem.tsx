import Todo from "../models/todo";
import cssClasses from "./TodoItem.module.css";

export default function TodoItem({ item }: { item: Todo }) {
  return <li className={cssClasses.item}>{item.text}</li>;
}
