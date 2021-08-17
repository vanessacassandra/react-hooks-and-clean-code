import React from "react";
import User from "./User";

const InterfaceSegregation = () => {
  const userDetails = {
    name: "John",
    age: 20,
    address: "7th Meadow Street",
    companyName: "Good Inc",
    companyAddress: "11th Avenue",
  };

  return (
    <div>
      <User details={userDetails} />
    </div>
  );
};

export default InterfaceSegregation;
