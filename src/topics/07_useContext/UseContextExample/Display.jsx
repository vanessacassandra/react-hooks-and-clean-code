import React, { useContext } from "react";
import { UserContext } from ".";

const Display = () => {
  const { name, address } = useContext(UserContext);
  
  if (!name) return null;
  
  return (
    <div>
      My name is {name}. My address is at {address}.
    </div>
  );
};

export default Display;
