import React from "react";
function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
const CalculateFactorial = ({ number, onChange, onClick }) => {
  const factorial = factorialOf(number);

  console.log("CalculateFactorial component rendered");
  return (
    <div>
      <span>
        Factorial of <input type="number" value={number} onChange={onChange} /> is {factorial}{" "}
      </span>
      <button onClick={onClick}>Log number</button>
    </div>
  );
};

export default React.memo(CalculateFactorial);
