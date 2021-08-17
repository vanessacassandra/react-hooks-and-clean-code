import React, { useState } from "react";

export const AccordionContext = React.createContext();

const Accordion = ({ children, defaultExpanded }) => {
  const [activeItem, setActiveItem] = useState(defaultExpanded);

  const setToggle = (value) => {
    if (activeItem === value) {
      setActiveItem(null);
    } else {
      setActiveItem(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeItem, setToggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
