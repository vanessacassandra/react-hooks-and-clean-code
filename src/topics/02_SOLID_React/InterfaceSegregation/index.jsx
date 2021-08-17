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
    <>
      <small>src/topics/02_SOLID_React/InterfaceSegregation/index.jsx</small>
      <User details={userDetails} />
    </>
  );
};

export default InterfaceSegregation;
