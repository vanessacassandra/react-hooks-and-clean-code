import React from "react";
import NavBar from "./NavBar";
import UserList from "./UserList";

// Instead of putting all functions in one file, separate them into different components
const SingleResponsibility = () => {
  return (
    <>
      <small>src/topics/02_SOLID_React/SingleResponsibility/index.jsx</small>
      <NavBar />
      <UserList />
    </>
  );
};

export default SingleResponsibility;
