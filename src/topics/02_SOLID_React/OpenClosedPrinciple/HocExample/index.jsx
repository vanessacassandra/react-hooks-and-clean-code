import OrderReport from "./OrderReport";

const withLogger =
  (BaseUserComponent) =>
  ({ customer }) => {
    const logData = () => {
      console.log(customer);
    };

    return <BaseUserComponent customer={customer} onClick={logData} />;
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
  };

  const LoggableOrderReport = withLogger(OrderReport);
  return (
    <div>
      <OrderReport customer={customerA} />
      <LoggableOrderReport customer={customerB} />
    </div>
  );
};

export default HocExample;
