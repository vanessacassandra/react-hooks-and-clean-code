import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const CompoundComponent = () => {
  return (
    <>
      <Accordion defaultExpanded="item1">
        <AccordionItem value="item1">Item 1</AccordionItem>
        <AccordionItem value="item2">Item 2</AccordionItem>
        <AccordionItem value="item3">Item 3</AccordionItem>
      </Accordion>
    </>
  );
};

export default CompoundComponent;
