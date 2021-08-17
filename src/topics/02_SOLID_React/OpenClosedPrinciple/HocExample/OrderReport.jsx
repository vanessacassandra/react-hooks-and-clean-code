import React from "react";

const OrderReport = ({ customer: { name, address, total }, children }) => {
  return (
    <div
      style={{
        borderBottom: "solid 1px black",
        padding: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>{name}</p>
      <span>{address}</span>
      <span>Orders: {total}</span>
      {children}
    </div>
  );
};

export default OrderReport;
