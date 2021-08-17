import React from "react";

const User = ({ name, address }) => {
  return (
    <div>
      {name}'s address is at {address}
    </div>
  );
};

const LiskovSubstitution = () => {
  return <User name="John" address="11th Avenue" />;
};

export default LiskovSubstitution;
