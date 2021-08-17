import React from "react";

const Display = ({ name, address }) => {
  return (
    <div>
      ${name}'s address is at ${address}
    </div>
  );
};

export default Display;
