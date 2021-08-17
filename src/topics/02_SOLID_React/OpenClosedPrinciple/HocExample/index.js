import React, { useState } from "react";
import OrderReport from "./OrderReport";

const withSameDayDeliver = (SpecialOrderComponent) => (props) => {
  return (
    <SpecialOrderComponent customer={props.customer}>
      <div>I am also same day delivery</div>
      {props.children}
    </SpecialOrderComponent>
  );
};

const withSpecialOrder = (BaseUserComponent) => (props) => {
  return (
    <BaseUserComponent customer={props.customer}>
      <div>I am very special</div>
      {props.children}
    </BaseUserComponent>
  );
};

const withFastTrackedOrder = (BaseUserComponent) => (props) => {
  const [fastTracker, setFastTracker] = useState(props.isFastTracked);
  const baseElements = (
    <BaseUserComponent customer={props.customer}>
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
  const customerC = {
    name: "Company C",
    address: "123 Abram Ave",
    total: 1010,
    specialDelivery: true,
  };

  const FastOrder = withFastTrackedOrder(OrderReport);
  const SpecialOrder = withSpecialOrder(OrderReport);
  const SameDayDelivery = withSameDayDeliver(withSpecialOrder(OrderReport));
  return (
    <div className="App">
      <OrderReport customer={customer} />
      <FastOrder customer={customerB} />
      <SpecialOrder customer={customerC} />
      <SameDayDelivery customer={customerC} />
    </div>
  );
};

export default HocExample;
