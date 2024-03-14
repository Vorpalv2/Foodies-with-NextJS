import React from "react";

const CustomIDPage = ({ params }) => {
  return (
    <div>
      <h1>CustomID Page</h1>
      {params.id}
    </div>
  );
};

export default CustomIDPage;
