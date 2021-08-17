import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
import styled from "styled-components";


const AccordionContainer = styled.div`
  padding: 5px;
  border: solid 1px black;
  cursor: pointer;
`;

const AccordionItem = ({ children, title }) => {
  const { activeItem, setToggle } = useContext(AccordionContext);

  return (
    <AccordionContainer>
      <div onClick={() => setToggle(title)}>{children}</div>
      {activeItem === title && <div>The details for {children}</div>}
    </AccordionContainer>
  );
};

export default AccordionItem;
