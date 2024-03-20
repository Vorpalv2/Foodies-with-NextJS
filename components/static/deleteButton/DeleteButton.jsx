"use client";
import React from "react";

const DeleteButton = ({ clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default DeleteButton;
