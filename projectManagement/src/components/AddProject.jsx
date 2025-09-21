import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h1 className="text-xl font-bold text-stone-500 my-4">Invalid input</h1>
        <p className="text-stone-400 mb-4">
          Looks like you didn't enter values...
        </p>
      </Modal>
      <div className="w-screen mt-16 mr-4">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button className="btn btn-error" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-success px-6 py-2" onClick={handleSave}>
            Save
          </button>
        </menu>

        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textArea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
