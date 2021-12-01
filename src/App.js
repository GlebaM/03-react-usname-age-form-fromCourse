import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsers] = useState([]);

  const addUser = (usserName, userAge) => {
    setUsers((previousList) => [
      ...previousList,
      { name: usserName, age: userAge, id: Math.random() * 1000000000 },
    ]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUser} />
      {usersList.length > 0 ? <UsersList users={usersList} /> : ""}
    </Fragment>
  );
}

export default App;
