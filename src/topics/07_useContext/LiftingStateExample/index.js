import React, { useState } from "react";
import Address from "./Address";
import Person from "./Person";
import Display from "./Display";

const LiftingStateExample = () => {
  const [name, setName] = useState("");

  const onNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <Person name={name} onNameChange={onNameChange} />
      <Address />
      <Display name={name} />
    </div>
  );
};

export default LiftingStateExample;
