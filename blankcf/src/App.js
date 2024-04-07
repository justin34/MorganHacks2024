// App.js

import React from 'react';
import './App.css';
import TallyFormEmbed from './Form/TallyFormEmbed'; // Import TallyFormEmbed component
import JobList from './Roadmap/JobList';

const App = () => {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '80vh' }}> {/* Adjust height as needed */}
        <TallyFormEmbed /> {/* Render the TallyFormEmbed component */}
      </div>
      <JobList />
    </div>
  );
}

export default App;
