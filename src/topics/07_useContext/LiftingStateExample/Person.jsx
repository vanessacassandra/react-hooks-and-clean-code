import React from "react";

const Person = ({ name, onNameChange }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
};

export default Person;
