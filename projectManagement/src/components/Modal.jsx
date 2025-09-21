import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="btn btn-primary">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
