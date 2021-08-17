## useState

`useState` is used to manage local state. It takes in the initial state as the argument, and returns a pair of values: the current state and a function that updates it.

```jsx
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); // initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

`useState` also takes a function in the initial state, for example:

```jsx
const expensiveComputation = () => {};

const [value, setValue] = useState(expensiveComputation);
```

Expensive computation above will only be called one time when the component is rendered for the first time. This is called lazy initialization.

If the new state depends on the previous state, pass in a callback function in the state updater.

```jsx
const [value, setValue] = useState(true);

// Bad
const toggle = () => setValue(!value);
// Good
const toggle = () => setValue((value) => !value);
```

## useEffect

`useEffect` is used to manage side effects.

```jsx
const [name, setName] = useState("Vanessa");
const [description, setDescription] = useState("");

useEffect(() => {
  // Will be executed everytime dependency value changes
  setDescription(`This belongs to ${name}`);
}, [name]); //dependencies
```

`useEffect` returns a function that will be executed when the component is unmounted. When adding event handler on mount, don't forget to remove it on unmount.

```jsx
const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
});

useEffect(() => {
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize);
}, []); //run only on mount
```

### React Hooks Flow

![Hooks Flow](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

[Source](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)

## useRef

When to use `useRef`:

- Keeping a mutable value
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Unlike `useState`, the value used in `useRef` will not trigger a re-render when it changes. It is handy to keep any mutable value around. It is commonly used to keep a reference to the DOM object.

```jsx
const App = () => {
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
```

## Further readings

- [React's Official Guide on Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Myths about useEffect](https://epicreact.dev/myths-about-useeffect/)
- [The Complete Guide to useRef() and Refs in React](https://dmitripavlutin.com/react-useref-guide/)
