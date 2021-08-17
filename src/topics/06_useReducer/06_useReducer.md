## When to use useReducer?

Use `useReducer` when `useState` is becoming too complex. `useReducer` can also be used together with `useContext` to manage complex state.

## Example

Consider the following example without using `useReducer`.

```jsx
import React, { useState } from "react";

const WithoutReducer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return (
    <div>
      <p>Loading: {String(isLoading)}</p>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Error: {String(error)}</p>
      <button onClick={fetchData}>Fetching new data</button>
    </div>
  );
};

export default WithoutReducer;
```

Every time the data is fetched, we need to manage three different states: `loading`, `data`, and `error` state. Instead of calling multiple state updater function everywhere, we can just dispatch an action and let the updating of the state to be handled inside the reducer.

Below is after using `useReducer`:

```jsx
import React, { useReducer } from "react";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchDataStart":
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case "fetchDataSuccess":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case "fetchDataFail":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = () => {
    dispatch({ type: "fetchDataStart" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "fetchDataSuccess",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: "fetchDataFail", payload: error });
      });
  };

  const { isLoading, data, error } = state;

  return (
    <div>
      <p>Loading: {String(isLoading)}</p>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Error: {String(error)}</p>
      <button onClick={fetchData}>Fetching new data</button>
    </div>
  );
};

export default UseReducerExample;
```

## Further Readings
- [Examples of the useReducer Hook](https://daveceddia.com/usereducer-hook-examples/)