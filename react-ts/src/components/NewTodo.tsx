import { useRef } from "react";

export default function NewTodo() {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    const todoText = inputRef.current!.value;
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">Todo Text</label>
      <input ref={inputRef} type="text" />
      <button>Add Todo</button>
    </form>
  );
}
