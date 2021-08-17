import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Leanne", surname: "Graham", age: 20 },
    { id: 2, name: "Erwin", surname: "Howell", age: 20 },
  ];

  return (
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
  );
};

export default UserList;
