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
    <>
      <small>src/topics/06_useReducer/UseReducerExample/index.js</small>
      <div>
        <p>Loading: {String(isLoading)}</p>
        <p>Data: {JSON.stringify(data)}</p>
        <p>Error: {String(error)}</p>
        <button onClick={fetchData}>Fetching new data</button>
      </div>
    </>
  );
};

export default UseReducerExample;
