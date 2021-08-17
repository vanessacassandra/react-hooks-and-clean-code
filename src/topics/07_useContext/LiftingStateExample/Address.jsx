import React, { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState("");

  const onAddressChange = (e) => setAddress(e.target.value);

  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={onAddressChange} />
    </div>
  );
};

export default Address;
