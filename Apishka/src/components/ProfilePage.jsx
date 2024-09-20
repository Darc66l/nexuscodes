import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/api/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}'s Profile</h1>
      <img src={profile.avatar} alt="User Avatar" />
      <h2>Past Contests</h2>
      <ul>
        {profile.contests.map(contest => (
          <li key={contest.id}>
            <p>{contest.name} - Placed: {contest.rank}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
