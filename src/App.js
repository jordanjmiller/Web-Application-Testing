import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [balls, setBalls] = useState(0);
  const [hits, setHits] = useState(0);

  return (
    <div className="App">
      <Display strikes={strikes} fouls={fouls} balls={balls} hits={hits}/>
      <Dashboard strikes={strikes} setStrikes={setStrikes} fouls={fouls} setFouls={setFouls} 
      balls={balls} setBalls={setBalls} hits={hits} setHits={setHits}/>
    </div>
  );
}

export default App;
