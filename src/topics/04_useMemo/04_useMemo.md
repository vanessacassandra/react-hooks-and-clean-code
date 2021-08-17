`useMemo` is used to memoize values.

```js
const memoizedResult = useMemo(compute, dependencies);
```

`compute` is the function that will be executed when any of the `dependencies` change.

```js
const memoizedResult = useMemo(() => {
  return expensiveFunction(propA, propB);
}, [propA, propB]);
```

When the function to calculate the value is expensive, we do not want to call it every render. In the case of the example above, we only want to call the function again only when `propA` or `propB` changes.

An example of expensive function is e.g. calculating a factorial:
```jsx
function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
    </div>
  );
}
```

## React.memo

Similar to `useMemo`, `React.memo` is used to memoize a component. 

```jsx
function factorialOf(n) {
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function CalculateFactorial({number}) {
	const factorial = factorialOf(number);

	return (
		<div>
			Factorial of {number} is {factorial}
		</div>
	);
}

export default React.memo(CalculateFactorial);
```

In the above, we wrap `CalculateFactorial` component inside `React.memo`, which means that `CalculateFactorial` will not be re-rendered if the props (`number`) does not change.

## When to use useMemo?

Memoization techniques like `useMemo` is usually used to improve performance. However, when memoization is used inappropriately, it could harm the performance instead. Avoid doing premature optimization and calculate the performance increase to justify the use of `useMemo`, `React.memo`, or other memoization techniques like `useCallback`.

## Further Readings
- [When to use useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [When should you memoize in React](https://prateeksurana.me/blog/when-should-you-memoize-in-react)