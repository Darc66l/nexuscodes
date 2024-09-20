import React, { useState } from 'react';
import axios from 'axios';

const TeamCreationPage = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState(null);
  const [teamSlogan, setTeamSlogan] = useState('');
  const [invitationEmail, setInvitationEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', teamName);
    formData.append('logo', teamLogo);
    formData.append('slogan', teamSlogan);

    axios.post('/api/team', formData)
      .then(response => alert('Team created successfully!'))
      .catch(error => console.error('Error creating team:', error));
  };

  const handleSendInvitation = () => {
    axios.post('/api/team/invite', { email: invitationEmail })
      .then(response => alert('Invitation sent!'))
      .catch(error => console.error('Error sending invitation:', error));
  };

  return (
    <div>
      <h1>Create a Team</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team Name"
          required
        />
        <input
          type="file"
          onChange={(e) => setTeamLogo(e.target.files[0])}
          required
        />
        <input
          type="text"
          value={teamSlogan}
          onChange={(e) => setTeamSlogan(e.target.value)}
          placeholder="Team Slogan"
          required
        />
        <button type="submit">Create Team</button>
      </form>

      <h2>Invite a User</h2>
      <input
        type="email"
        value={invitationEmail}
        onChange={(e) => setInvitationEmail(e.target.value)}
        placeholder="User Email"
      />
      <button onClick={handleSendInvitation}>Send Invitation</button>
    </div>
  );
};

export default TeamCreationPage;
