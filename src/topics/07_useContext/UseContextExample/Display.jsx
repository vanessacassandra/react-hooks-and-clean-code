import React, { useContext } from "react";
import { UserContext } from ".";

const Display = () => {
  const { name, address } = useContext(UserContext);
  
  if (!name) return null;
  
  return (
    <div>
      {name}'s address is at {address}
    </div>
  );
};

export default Display;
