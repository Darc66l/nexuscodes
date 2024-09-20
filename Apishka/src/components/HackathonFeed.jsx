import React, { useState, useEffect } from 'react';

const HackathonFeed = () => {
  // Fake data for hackathons
  const fakeHackathons = [
    {
      id: 1,
      title: 'AI Innovators Hackathon',
      company: 'Tech Corp',
      description: 'Join us for a weekend of AI innovation and creativity.',
    },
    {
      id: 2,
      title: 'Blockchain Builders',
      company: 'Crypto World',
      description: 'Create the next generation of decentralized applications.',
    },
    {
      id: 3,
      title: 'Sustainability Hackathon',
      company: 'Green Earth',
      description: 'Find innovative tech solutions to global environmental challenges.',
    },
    {
      id: 4,
      title: 'FinTech Future Hack',
      company: 'Finance Masters',
      description: 'Redefine the future of finance with cutting-edge technology.',
    },
    {
      id: 5,
      title: 'HealthTech Innovators',
      company: 'MediTech',
      description: 'Improve healthcare through innovative technological solutions.',
    },
    {
      id: 6,
      title: 'AI Ethics Hack',
      company: 'EthicaTech',
      description: 'Explore ethical implications of AI in modern technology.',
    },
  ];

  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API by setting the fake data after a short delay
    setTimeout(() => {
      setHackathons(fakeHackathons);
    }, 1000);
  }, []);

  // Handler for participating in a hackathon
  const handleParticipate = (hackathonTitle) => {
    alert(`You have chosen to participate in ${hackathonTitle}`);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Hackathon Feed</h2>
      {hackathons.length === 0 ? (
        <p className="text-center">No hackathons available at the moment. Check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map(hackathon => (
            <div key={hackathon.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{hackathon.title}</h3>
              <p className="text-sm">Organized by {hackathon.company}</p>
              <p className="mt-2">{hackathon.description}</p>
              <button
                onClick={() => handleParticipate(hackathon.title)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Participate
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HackathonFeed;
