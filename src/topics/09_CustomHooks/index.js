import React, { useState } from "react";
import useDebounce from "./useDebounce";
import useToggle from "./useToggle";

const CustomHooks = () => {
  const [boolValue, toggle] = useToggle(false);
  const [textInput, setTextInput] = useState("");
  const debouncedInput = useDebounce(textInput, 200);

  return (
    <>
      <h2>Toggle</h2>
      <span>Value: {String(boolValue)} </span>
      <button onClick={toggle}>Toggle</button>

      <h2>Debounce</h2>
      <div>Text: {debouncedInput}</div>
      <input value={textInput} onChange={(e) => setTextInput(e.target.value)} />
    </>
  );
};

export default CustomHooks;
