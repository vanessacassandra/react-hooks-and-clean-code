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
