import React, { useState } from "react";
import OrderReport from "./OrderReport";

const withFastTrackedOrder =
  (BaseUserComponent) =>
  ({ isFastTracked, customer }) => {
    const [fastTracker, setFastTracker] = useState(isFastTracked);
    const baseElements = (
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
    return baseElements;
  };

const HocExample = () => {
  const customer = {
    name: "Company A",
    address: "720 Kennedy Rd",
    total: 1000,
  };
  const customerB = {
    name: "Company B",
    address: "410 Ramsy St",
    total: 1000,
    isEligible: true,
    isFastTracked: false,
  };

  const FastOrder = withFastTrackedOrder(OrderReport);
  return (
    <div>
      <OrderReport customer={customer} />
      <FastOrder customer={customerB} />
    </div>
  );
};

export default HocExample;
