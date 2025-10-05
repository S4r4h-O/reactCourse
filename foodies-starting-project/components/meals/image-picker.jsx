"use client";
import { useRef } from "react";

import cssClasses from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  return (
    <div className={cssClasses.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cssClasses.controls}>
        <input
          ref={imageInputRef}
          className={cssClasses.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
        />
        <button
          className={cssClasses.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
