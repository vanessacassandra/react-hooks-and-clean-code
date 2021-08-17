import React from "react";

const PersonalDetails = ({ name, age, address }) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Addres: {address}</div>
    </>
  );
};

export default PersonalDetails;
