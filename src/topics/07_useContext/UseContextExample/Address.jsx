import React, { useContext } from "react";
import { UserContext } from ".";

const Address = () => {
  const { address, setAddress } = useContext(UserContext);
  const onAddressChange = (e) => setAddress(e.target.value);

  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={onAddressChange} />
    </div>
  );
};

export default Address;
