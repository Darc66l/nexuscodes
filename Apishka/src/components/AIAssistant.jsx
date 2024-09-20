import React, { useState } from 'react';

const AIAssistant = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Call backend AI assistant API (to be implemented in backend)
    fetch(`/api/ai/search?q=${query}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching AI search results:', error));
  };

  return (
    <div>
      <h1>AI Assistant</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for teams or participants..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AIAssistant;
