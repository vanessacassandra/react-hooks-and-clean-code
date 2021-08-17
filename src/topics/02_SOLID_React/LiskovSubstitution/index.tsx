import React from "react";

interface IUser {
  name: string;
  address: string;
}

const User = ({ name, address }: IUser) => {
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
