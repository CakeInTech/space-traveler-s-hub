import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Mission from './Components/pages/Mission';
import Profile from './Components/pages/Profile';
import Rocket from './Components/pages/Rocket';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" elemnt={<Rocket />} />
        <Route path="/missions" elemnt={<Mission />} />
        <Route path="/profile" elemnt={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
