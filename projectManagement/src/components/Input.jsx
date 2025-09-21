import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  const classes =
    "w-full p-1 bg-stone-200 border-stone-200 text-stone-600 focus:outline-none";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="label font-bold uppercase">{label}</label>
      {textArea ? (
        <textarea className={"textarea " + classes} ref={ref} {...props} />
      ) : (
        <input className={"input " + classes} ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
