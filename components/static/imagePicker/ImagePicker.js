import React from "react";
import classes from "./imagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
};

export default ImagePicker;
