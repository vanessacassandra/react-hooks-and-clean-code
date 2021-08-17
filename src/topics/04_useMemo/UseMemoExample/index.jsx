import React, { useMemo, useState } from "react";

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <>
      <small>src/topics/04_useMemo/UseMemoExample/index.js</small>
      <div>
        Factorial of
        <input type="number" value={number} onChange={onChange} /> is {factorial}
      </div>
    </>
  );
};

export default UseMemoExample;
