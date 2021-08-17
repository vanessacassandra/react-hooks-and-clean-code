import React, { useState } from "react";
import Address from "./Address";
import Person from "./Person";
import Display from "./Display";

const LiftingStateExample = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  return (
    <div>
      <Person name={name} onNameChange={onNameChange} />
      <Address address={address} onAddressChange={onAddressChange} />
      <Display name={name} address={address} />
    </div>
  );
};

export default LiftingStateExample;
