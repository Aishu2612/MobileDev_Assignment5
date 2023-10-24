import React, { useState, useEffect } from 'react';

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data.results)
      }

      );
  }, []);

  return (
    <table className='Users'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>{user.name.first}</td>
            <td>{user.location.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserDetails;
