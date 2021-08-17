import React, { useCallback, useState } from "react";
import CalculateFactorial from "./CalculateFactorial";

const UseCallbackExample = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  // onChange is memoized and will not change
  const onNumberChange = useCallback((event) => {
    setNumber(Number(event.target.value));
  }, []);

  // logNumber is memoized, and will be recreated when "number" changes
  const logNumber = useCallback(() => {
    console.log(`Number: ${number}`);
  }, [number]);

  const onTextChange = (e) => setText(e.target.value);

  return (
    <>
      <CalculateFactorial number={number} onChange={onNumberChange} onClick={logNumber} />
      <br />

      <div>
        <span>Sibling component: </span>
        <input value={text} onChange={onTextChange} />
      </div>
    </>
  );
};

export default UseCallbackExample;
