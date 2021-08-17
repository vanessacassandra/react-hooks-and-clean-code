import React from "react";

const CompanyDetails = ({ details }) => {
  const { companyName, companyAddress } = details;
  return (
    <>
      <div>Company name: {companyName}</div>
      <div>Company address: {companyAddress}</div>
    </>
  );
};

export default CompanyDetails;
