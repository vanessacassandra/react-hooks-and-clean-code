import React, { useState } from "react";
import OrderReport from "./OrderReport";

const withFastTrackedOrder =
  (BaseUserComponent) =>
  ({ isFastTracked, customer }) => {
    const [fastTracker, setFastTracker] = useState(isFastTracked);
    
    return (
      <BaseUserComponent customer={customer}>
        <div>
          <button
            onClick={() => {
              setFastTracker(!fastTracker);
            }}
          >
            Toggle Tracking
          </button>
          {fastTracker ? <span> Fast Tracked Enabled </span> : <span> Not Fast Tracked </span>}
        </div>
      </BaseUserComponent>
    );
  };

const HocExample = () => {
  const customerA = {
    name: "Company A",
    address: "720 Kennedy Rd",
    total: 1000,
  };
  const customerB = {
    name: "Company B",
    address: "410 Ramsy St",
    total: 1000,
    isFastTracked: true
  };

  const FastOrder = withFastTrackedOrder(OrderReport);
  return (
    <div>
      <OrderReport customer={customerA} />
      <FastOrder customer={customerB} />
    </div>
  );
};

export default HocExample;
