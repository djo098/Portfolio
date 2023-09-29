import React from "react";
import "../../styles/App.scss";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Sobre from "../../components/Sobre";
import Competencias from "../../components/Competencias";
import Projetos from "../../components/Projetos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Competencias />
      <Projetos />
    </div>
  );
}

export default App;
