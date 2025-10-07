import { useRef } from "react";

export default function NewTodo() {
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form>
      <label htmlFor="">Todo Text</label>
      <input type="text" />
      <button>Add Todo</button>
    </form>
  );
}
