import React from 'react';
import MinerStats from './components/MinerStats';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 MiningRig Dashboard</h1>
        <MinerStats />
      </header>
    </div>
  );
}

export default App;
