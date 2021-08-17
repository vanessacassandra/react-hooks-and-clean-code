## When to use useContext?

A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can [optimize it by using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

### Lifting State

When sharing data between sibling components, one way to achieve it is to lift the state.

Consider the following:

```jsx

```

Let's say now the `Display` has to also show the data of. One way to 


In the event of the `Display` does not need to show the data anymore, make sure to put the animal state back inside the `Animal` component.

Guiding principle: Keep the state as close as possible to the component that is using it.

## Further Readings
- [React's official guide to Context](https://reactjs.org/docs/context.html)