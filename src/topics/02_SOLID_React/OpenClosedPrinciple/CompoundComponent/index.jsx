import Accordion from "./Accordion";

const CompoundComponent = () => {
  const options = [
    { title: "Item 1", details: "This is the details of item 1" },
    { title: "Item 2", details: "This is the details of item 2" },
  ];

  return <Accordion options={options} defaultExpanded={1}/>;
};

export default CompoundComponent;
