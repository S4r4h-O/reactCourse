"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import cssClasses from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [chosenImage, setChosenImage] = useState();
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setChosenImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setChosenImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={cssClasses.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cssClasses.controls}>
        <div className={cssClasses.preview}>
          {!chosenImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image
              src={chosenImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={cssClasses.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
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
