import React from "react";
// import ReactDOM from "react-dom/client";
import "../styles/Navbar.scss";
// import App from "../App";

const activate = e => {
    document.getElementById("home").classList.remove('active');
    document.getElementById("sobre").classList.remove('active');
    document.getElementById("projetos").classList.remove('active');
    document.getElementById("contato").classList.remove('active');

    document.getElementById(e.currentTarget.id).classList.add('active');
}

const downloadResume = () => {
    fetch('CV pt.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);

            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV pt.pdf';
            alink.click();
        })
    })
}

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="nav-menu">
          <a href="#" id="home" className="active" onClick={activate}>
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
          <a href="#curriculo" id="curriculo" onClick={downloadResume}>
            curriculo <i class="fa-solid fa-file-arrow-down" style={{color: "#e19851"}}></i>
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
