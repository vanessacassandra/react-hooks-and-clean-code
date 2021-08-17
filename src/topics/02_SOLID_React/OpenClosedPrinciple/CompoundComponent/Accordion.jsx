import React, { useState } from "react";

import styled from "styled-components";
const AccordionItem = styled.div`
  padding: 5px;
  border: solid 1px black;
  cursor: pointer;
`;

const Accordion = ({ options }) => {
  const [activeItem, setActiveItem] = useState();

  const setToggle = (value) => {
    if (activeItem === value) {
      setActiveItem(null);
    } else {
      setActiveItem(value);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <AccordionItem key={option.title}>
          <div onClick={() => setToggle(option)}>{option.title}</div>
          {activeItem === option && <div>{option.details}</div>}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
