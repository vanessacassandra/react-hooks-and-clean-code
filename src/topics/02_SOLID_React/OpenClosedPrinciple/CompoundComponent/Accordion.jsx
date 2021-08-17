import React, { useState } from "react";

const Accordion = ({ children, defaultExpanded }) => {
  const [activeItem, setActiveItem] = useState(defaultExpanded);

  const setToggle = (value) => {
    if (activeItem === value) {
      setActiveItem(null);
    } else {
      setActiveItem(value);
    }
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeItem, setToggle })
  );
};

export default Accordion;
