import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HackathonFeed = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    axios.get('/api/hackathons')
      .then(response => setHackathons(response.data))
      .catch(error => console.error('Error fetching hackathons:', error));
  }, []);

  console.log(hackathons);
  return (
    <div>
      <h1>Hackathon News Feed</h1>
      {hackathons.length === 0 ? (
        <p>No hackathons available at the moment. Check back later!</p>
      ) : (
        <ul>
          {hackathons.map(hackathon => (
            <li key={hackathon.id}>
              <h3>{hackathon.title}</h3>
              <p>Organized by {hackathon.company}</p>
              <p>{hackathon.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HackathonFeed;
