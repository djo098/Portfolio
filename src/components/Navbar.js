import React, { Component } from "react";
// import ReactDOM from "react-dom/client";
import "../styles/Navbar.scss";
import Pdf from "../documents/CV pt.pdf"
// import App from "../App";

const activate = e => {
    document.getElementById("home").classList.remove('active');
    document.getElementById("sobre").classList.remove('active');
    document.getElementById("projetos").classList.remove('active');
    document.getElementById("contato").classList.remove('active');

    document.getElementById(e.currentTarget.id).classList.add('active');
}

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-menu">
          <a href="#home" id="home" className="active" onClick={activate}>
            diogomateus<span id="dev">dev</span>
          </a>
          <a href="#sobre" id="sobre" onClick={activate}>
            sobre
          </a>
          <a href="#projetos" id="projetos" onClick={activate}>
            projetos
          </a>
          <a href="#contato" id="contato" onClick={activate}>
            contato
          </a>
          <a href={Pdf} target = "_blank" id="curriculo">
            curriculo <i class="fa-solid fa-arrow-up-right-from-square" style={{color: "#e19851"}}></i>
          </a>

          <div className="dropdown">
            <p className="language">
              pt <i class="fa-solid fa-chevron-down" style={{color: "#e19851"}}></i>
            </p>
            <div className="dropdown-content">
              <a href="/en" id="en">
                en
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
