import React, { useEffect, useState } from "react";

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

const DependencyInversion = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(REMOTE_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1> Users List</h1>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </>
  );
};

export default DependencyInversion;
