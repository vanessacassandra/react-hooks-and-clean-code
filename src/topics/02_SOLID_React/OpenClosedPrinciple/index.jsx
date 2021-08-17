import CompoundComponent from "./CompoundComponent";
import CompoundComponentWithContext from "./CompoundComponentWithContext";
import HocExample from "./HocExample";

const OpenClosedPrinciple = () => {
  return (
    <>
      <h2>Higher Order Component example</h2>
      <HocExample />
      <h2>Compound Component example</h2>
      <h3>Without Context</h3>
      <CompoundComponent />
      <h3>With Context</h3>
      <CompoundComponentWithContext />
    </>
  );
};

export default OpenClosedPrinciple;
