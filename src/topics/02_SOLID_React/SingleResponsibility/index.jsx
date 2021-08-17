import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 10px;
  border-bottom: solid 1px black;
  font-weight: bold;
  text-align: center;
`;

// Instead of putting all functions in one file, separate them into different components
const SingleResponsibility = () => {
  const users = [
    { id: 1, name: "Leanne", surname: "Graham", age: 20 },
    { id: 2, name: "Erwin", surname: "Howell", age: 20 },
  ];

  return (
    <>
      <small>src/topics/02_SOLID_React/SingleResponsibility/index.jsx</small>
      <Header>Header</Header>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SingleResponsibility;
