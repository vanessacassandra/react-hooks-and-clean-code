import React from "react";

const PersonalDetails = ({ details }) => {
  const { name, age, address } = details;
  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Addres: {address}</div>
    </>
  );
};

export default PersonalDetails;
