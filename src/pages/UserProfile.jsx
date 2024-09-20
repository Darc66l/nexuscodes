// src/pages/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data
    axios.get('/api/user/profile') // Adjust API endpoint as needed
      .then(response => {
        setUser(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <img src={user.avatar} alt="Avatar" />
      <h3>Previous Contests</h3>
      <ul>
        {user.contests && user.contests.map((contest, index) => (
          <li key={index}>{contest.name} - Placed: {contest.place}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
