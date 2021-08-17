import OrderReport from "./OrderReport";

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

  return (
    <div>
      <OrderReport customer={customerA} />
      <OrderReport customer={customerB} />
    </div>
  );
};

export default HocExample;
