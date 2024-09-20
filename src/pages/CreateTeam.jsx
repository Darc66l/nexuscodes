// src/pages/CreateTeam.jsx
import React, { useState } from 'react';
import axios from 'axios';

function CreateTeam() {
  const [team, setTeam] = useState({
    name: '',
    logo: '',
    slogan: '',
  });

  const handleChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send team data to the server
    axios.post('/api/teams/create', team) // Adjust API endpoint as needed
      .then(response => {
        console.log('Team created:', response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Create a Team</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Team Name"
          value={team.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="logo"
          placeholder="Logo URL"
          value={team.logo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="slogan"
          placeholder="Slogan"
          value={team.slogan}
          onChange={handleChange}
        />
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
}

export default CreateTeam;
