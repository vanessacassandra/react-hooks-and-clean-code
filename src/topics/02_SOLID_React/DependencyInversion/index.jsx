import React from "react";
import { useFetch } from "./useFetch";

import "../../../index.css";

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

const DependencyInversion = () => {
  const users = useFetch(REMOTE_URL);

  return (
    <>
      <small>src/topics/02_SOLID_React/DependencyInversion/index.jsx</small>
      <h1> Users List</h1>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </>
  );
};

export default DependencyInversion;
