/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('Is Loading...');

  /* your code here (hint: useEffect) */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(repsonse => repsonse.json())
      .then(data => setUsers(data))
      .then(() => setIsLoading(false))
      .catch(error => {
        setError(error.message);
        alert(error.message);
        console.error(error);
      });
  }, [isLoading]);

  return isLoading
    ? <p>{error}</p>
    : <UserList users={users} />;
}
