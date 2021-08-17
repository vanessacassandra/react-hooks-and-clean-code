import React, { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefExample;
