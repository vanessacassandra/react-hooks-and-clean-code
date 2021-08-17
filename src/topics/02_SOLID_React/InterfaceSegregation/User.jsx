import React from "react";
import CompanyDetails from "./CompanyDetails";
import PersonalDetails from "./PersonalDetails";

const User = ({ details }) => {

  return (
    <div>
      <PersonalDetails details={details} />
      <CompanyDetails details={details} />
    </div>
  );
};

export default User;
