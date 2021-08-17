import React from "react";

const Address = ({ address, onAddressChange }) => {
  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={onAddressChange} />
    </div>
  );
};

export default Address;
