import { memo } from "react";

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function CalculateFactorial({ number }) {
  const factorial = factorialOf(number);

  return (
    <div>
      Factorial of {number} is {factorial}
    </div>
  );
}

export default memo(CalculateFactorial);
