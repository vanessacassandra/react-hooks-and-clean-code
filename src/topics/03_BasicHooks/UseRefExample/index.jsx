import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <small>src/topics/03_BasicHooks/UseRefExample/index.js</small>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefExample;
