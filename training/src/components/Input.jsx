import { useRef, useEffect } from "react";

export default function Input({
  onRef,
  type = "text",
  placeholder = "",
  isInvalid,
}) {
  return (
    <input
      ref={onRef}
      type={type}
      placeholder={placeholder}
      className={`input ${isInvalid && " border-rose-700"}`}
    />
  );
}
