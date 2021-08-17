import React from "react";
import CompanyDetails from "./CompanyDetails";
import PersonalDetails from "./PersonalDetails";

const User = ({ details }) => {
  const { name, age, address, companyName, companyAddress } = details;

  return (
    <div>
      <PersonalDetails name={name} age={age} address={address} />
      <CompanyDetails name={companyName} address={companyAddress} />
    </div>
  );
};

export default User;
