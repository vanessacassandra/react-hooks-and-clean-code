import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  padding: 5px;
  border: solid 1px black;
  cursor: pointer;
`;

const AccordionItem = ({ children, activeItem, setToggle, value }) => {
  return (
    <AccordionContainer>
      <div onClick={() => setToggle(value)}>{children}</div>
      {activeItem === value && <div>The details for {children}</div>}
    </AccordionContainer>
  );
};

export default AccordionItem;
