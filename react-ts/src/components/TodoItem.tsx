import Todo from "../models/todo";

export default function TodoItem({ item }: { item: Todo }) {
  return <li>{item.text}</li>;
}
