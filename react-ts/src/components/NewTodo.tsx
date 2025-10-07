import { useRef } from "react";

export default function NewTodo({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    const todoText = inputRef.current!.value;

    onAddTodo(todoText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputRef} id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
}
