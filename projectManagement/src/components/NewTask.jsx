import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="input w-64 px-2 py-1"
        onChange={handleChange}
        value={enteredTask}
      />
      <button className="btn btn-success" onClick={handleClick}>
        Add task
      </button>
    </div>
  );
}
