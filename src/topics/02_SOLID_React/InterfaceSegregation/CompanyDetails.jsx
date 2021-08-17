import React from "react";

const CompanyDetails = ({ name, address }) => {
  return (
    <>
      <div>Company name: {name}</div>
      <div>Company address: {address}</div>
    </>
  );
};

export default CompanyDetails;
