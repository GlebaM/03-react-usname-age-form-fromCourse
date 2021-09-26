import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsers] = useState([]);

  const addUser = (uName, uAge) => {
    setUsers((previousList) => {
      return [
        ...previousList,
        { name: uName, age: uAge, id: Math.random() * 1000000000 },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      {usersList.length > 0 ? <UsersList users={usersList} /> : ""}
    </div>
  );
}

export default App;
