import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (user) => {
    setUsers((preUsers) => [...preUsers, { ...user, id: Date.now() }]);
  };

  return (
    <div>
      <AddUser setUsers={addUsersHandler}></AddUser>
      {users.length > 0 && <UsersList users={users}></UsersList>}
    </div>
  );
}

export default App;
