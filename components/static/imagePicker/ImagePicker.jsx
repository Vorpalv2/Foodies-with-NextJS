"use client";
import React, { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState(null);
  let imageRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const filereader = new FileReader();
    filereader.onload = () => {
      setImage(filereader.result);
    };
    filereader.readAsDataURL(file);
  };

  const handleClick = () => imageRef.current.click();

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div>
          {!image && <p>No image picked yet</p>}
          {image && (
            <Image
              src={image}
              height={100}
              width={100}
              alt="image picked by the user"
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageRef}
          onChange={handleImageChange}
        />
      </div>
      <button onClick={handleClick} className={classes.button} type="button">
        Pick an Image
      </button>
    </div>
  );
};

export default ImagePicker;
