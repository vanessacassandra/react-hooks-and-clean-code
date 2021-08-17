import React, { useContext } from "react";
import { UserContext } from ".";

const Person = () => {
  const { name, setName } = useContext(UserContext);
  const onNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
};

export default Person;
