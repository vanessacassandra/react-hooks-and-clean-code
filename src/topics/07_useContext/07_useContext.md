## When to use useContext?

Use `useContext` to share state between multiple components.

### Lifting State

When sharing data between sibling components, one way to achieve it is to lift the state.

Consider the following:

```jsx
const Person = ({ name, onNameChange }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
};
const Address = () => {
  const [address, setAddress] = useState("");

  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
    </div>
  );
};
const Display = ({ name }) => {
  return <div>My name is ${name}.</div>;
};

const App = () => {
  const [name, setName] = useState("");

  const onNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <Person name={name} onNameChange={onNameChange} />
      <Address />
      <Display name={name} />
    </div>
  );
};
```

Let's say now the `Display` has to also show the address. One way to share the address state is to "lift the state" to the parent component:

```jsx
const Person = ({ name, onNameChange }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
};
const Address = ({ address, onAddressChange }) => {
  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={onAddressChange} />
    </div>
  );
};
const Display = ({ name, address }) => {
  return (
    <div>
      My name is ${name}. My address is at ${address}
    </div>
  );
};

const App = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  return (
    <div>
      <Person name={name} onNameChange={onNameChange} />
      <Address address={address} onAddressChange={onAddressChange} />
      <Display name={name} address={address} />
    </div>
  );
};
```

In the event of the `Display` does not need to show the address anymore, make sure to put the address state back inside the `Address` component.

Guiding principle: Keep the state as close as possible to the component that is using it.

## useContext

If we were to rewrite the above example with useContext, it would be:

```jsx
const UserContext = React.createContext();

const Address = () => {
  const { address, setAddress } = useContext(UserContext);
  const onAddressChange = (e) => setAddress(e.target.value);

  return (
    <div>
      <label htmlFor="address">Address: </label>
      <input id="address" value={address} onChange={onAddressChange} />
    </div>
  );
};

const Person = () => {
  const { name, setName } = useContext(UserContext);
  const onNameChange = (e) => setName(e.target.value);

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
};

const Display = () => {
  const { name, address } = useContext(UserContext);

  if (!name) return null;

  return (
    <div>
      My name is {name}. My address is at {address}.
    </div>
  );
};

const UseContextExample = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const value = { name, setName, address, setAddress };

  return (
    <UserContext.Provider value={value}>
      <Person />
      <Address />
      <Display />
    </UserContext.Provider>
  );
};
```

Use `createContext` to create the context, wrap the children with the context `Provider`, and indicate the value available to the context consumer from `value` props. The children then can consume the context by calling the `useContext`.

Note: all context consumer will be re-rendered whenever the context `value` changes. This means, when the value of `name` changes, even though the `Address` component is not consuming this value, it will still be re-rendered.

A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can [optimize it by using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

## Further Readings

- [React's official guide to Context](https://reactjs.org/docs/context.html)
