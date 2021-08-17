import React, { useState } from "react";
import Address from "./Address";
import Person from "./Person";
import Display from "./Display";

export const UserContext = React.createContext();

const UseContextExample = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const value = { name, setName, address, setAddress };

  return (
    <UserContext.Provider value={value}>
      <Person />
      <Address />
      <Display />
    </UserContext.Provider>
  );
};

export default UseContextExample;
