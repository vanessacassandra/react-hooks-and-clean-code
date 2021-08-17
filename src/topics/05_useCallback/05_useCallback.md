`useCallback` is used to memoize function.

## When to use useCallback?

When do we need to memoize function?
- When pasing function to memoized children (React.memo)
- When passing function to useEffect dependencies

### Passing function to memoized children
For example, let's say we have a memoized `CalculateFactorial` component. This component takes in two props: `number` and `onClick` function.

```jsx
// Memoized children example
function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function CalculateFactorial({number, onClick}) {
  const factorial = factorialOf(number);

  return (
    <div>
      Factorial of {number} is {factorial}
      <button onClick={onClick}>Log number</button>
    </div>
  );
}

export default React.memo(CalculateFactorial);
```

`CalculateFactorial` component will not be re-rendered if the `number` and `onClick` props stay the same.

```jsx
// Bad
function App() {
	const [number, setNumber] = useState(0);
	// logNumber is recreated every render 
	const logNumber = () => {console.log(`Number: ${number}`)};

	return (<CalculateFactorial number={number} onClick={logNumber} />)
}
```

In the example above, `logNumber` function is recreated on every render, and as the result, the `onClick` props to the `CalculateFactorial`. As such, `CalculateFactorial` component will be re-rendered everytime and it defeats the use of `React.memo`.

To solve this problem, we can memoize `logNumber` function using `useCallback`.

```jsx
// Good
function App() {
	const [number, setNumber] = useState(0);
	// logNumber is memoized
	const logNumber = useCallback(() => {console.log(`Number: ${number}`)}, [number]);

	return (<CalculateFactorial number={number} onClick={logNumber} />)
}
```

### Passing function as dependency of useEffect

When calling a function inside `useEffect`, if you use ESLint, it will ask you to put the function as a dependency to useEffect.

```jsx
// Bad
function App() {
	const [number, setNumber] = useState(0);

	const increment = () => setNumber(n => n+1);
	const logNumber = () => {console.log(`Number: ${number}`)}

	useEffect(() => {
		logNumber();
	}, [logNumber])

	return (<button onClick={increment}>Add</button>)
}
```
In the example above, because `logNumber` is recreated every render, `useEffect` will be called every render. If the function called inside the `useEffect` updates the state, it will trigger a re-render, and we will have an infinite loop.

That's why when passing a function as `useEffect` dependency, we can utilize `useCallback` to make sure it is not recreated every render.

```jsx
// Good
function App() {
	const [number, setNumber] = useState(0);

	const increment = () => setNumber(n => n+1);
	const logNumber = useCallback(() => {console.log(`Number: ${number}`)}, [number]);

	useEffect(() => {
		logNumber();
	}, [logNumber])

	return (<button onClick={increment}>Add</button>)
}
```

## Further Readings

- [When to use useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [Memoization and React](https://epicreact.dev/memoization-and-react)
- [Your Guide to React.useCallback()](https://dmitripavlutin.com/dont-overuse-react-usecallback)