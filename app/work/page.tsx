

'use client';

import { useState, useEffect } from 'react';

const Work = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/testapi',{ next: { revalidate: 0 } });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of the outcome
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading .........</div>;
  }

  return (
    <div>
      <h1>Hi Work................!</h1>
      {Users.length > 0 ? (
        Users.map(user => (
          <div key={user.id}>
            <h2>ID: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <br />
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default Work;