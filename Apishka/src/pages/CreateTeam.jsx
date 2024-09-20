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
    <section className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create a Team</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Team Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Team Name"
              value={team.name}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-lg bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 border border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="logo" className="block mb-2 text-sm font-medium text-white">
              Logo URL
            </label>
            <input
              type="text"
              id="logo"
              name="logo"
              placeholder="Logo URL"
              value={team.logo}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-lg bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 border border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="slogan" className="block mb-2 text-sm font-medium text-white">
              Slogan
            </label>
            <input
              type="text"
              id="slogan"
              name="slogan"
              placeholder="Slogan"
              value={team.slogan}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-lg bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 border border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition duration-200"
          >
            Create Team
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateTeam;
  