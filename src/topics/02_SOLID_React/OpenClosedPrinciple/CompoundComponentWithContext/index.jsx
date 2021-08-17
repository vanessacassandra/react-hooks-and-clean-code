import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const CompoundComponentWithContext = () => {
  return (
    <Accordion defaultExpanded="item1">
      <AccordionItem title="item1">Item 1</AccordionItem>
      <AccordionItem title="item2">Item 2</AccordionItem>
      <AccordionItem title="item3">Item 3</AccordionItem>
    </Accordion>
  );
};

export default CompoundComponentWithContext;
