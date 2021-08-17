import React, { useState } from "react";

const doSomethingAsync = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("Doing something async");
      resolve();
    }, 500)
  );

const UseStateExample = () => {
  const [value, setValue] = useState(0);

  const increment = async () => {
    await doSomethingAsync();
    setValue((v) => v + 1);
  };

  return (
    <>
      <span>Value: {value} </span>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default UseStateExample;
