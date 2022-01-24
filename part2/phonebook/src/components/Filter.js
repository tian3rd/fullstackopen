import React from "react";

const Filter = ({ name, handleOnChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input type="text" name={name} onChange={handleOnChange} />
    </div>
  );
};

export default Filter;
