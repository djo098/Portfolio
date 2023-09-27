import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
    </div>
  );
}

export default App;
