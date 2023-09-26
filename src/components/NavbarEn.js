import React from "react";
// import ReactDOM from "react-dom/client";
import "../styles/Navbar.scss";
// import App from "../App";

const NavbarEn = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-menu">
          <a href="/" id="home">
            diogomateus<span id="dev">dev</span>
          </a>
          <a href="/" id="sobre">
            sobre
          </a>
          <a href="/" id="projetos">
            projetos
          </a>
          <a href="/" id="contato">
            contato
          </a>
          <a href="/" id="curriculo">
            currículo <i class="fa-solid fa-file-arrow-down" style={{color: "#e19851"}}></i>
          </a>

          <div className="dropdown">
            <p className="language">
              en <i class="fa-solid fa-chevron-down" style={{color: "#e19851"}}></i>
            </p>
            <div className="dropdown-content">
              <a href="/pt" id="pt">
                pt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEn;
