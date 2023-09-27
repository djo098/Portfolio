import React from "react";
import "../../styles/App.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Sobre from "../../components/Sobre";
import Skills from "../../components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Skills />
    </div>
  );
}

export default App;
