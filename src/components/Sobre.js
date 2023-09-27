import React from "react";
import Button from "./Button"
import "../styles/AboutMe.scss";
import pfp from "../images/Firefly guy in sunglasses posing in front of a Torii Gate 30397.jpg";
import pfpSmall from "../images/bizniz.png";

// For the .header
import { ReactComponent as LineSvg } from "../images/50px line.svg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-grid">
          <div className="profile-pic">
            <img src={pfp} className="pfp" alt="profile pic" />
          </div>
          <div className="header">
            <LineSvg className="Svg1" /> <h1>&#60;Sobre /&#62;</h1>
            <img src={pfpSmall} className="pfp-small" alt="small profile pic"/>
          </div>
          <div className="about-me-content">
            <p>
              Olá. O meu nome é{" "}
              <span className="attention bold underline">Diogo Coelho Mateus</span>. Sou
              licenciado em TI e vivo em Lisboa, Portugal. Tenho largas
              competências em muitos{" "}
              <span className="attention">softwares de design</span> e{" "}
              <span className="attention">frameworks de frontend</span>, como
              por exemplo React e Bootstrap para criar websites modernos e
              vibrantes. Tenho também conhecimentos em algumas{" "}
              <span className="attention">tecnologias full stack</span> tipo
              MERN ou até de{" "}
              <span className="attention">frameworks de backend</span> tipo
              Django ou Spring.
              <br /><br />
              Grande parte da minha experiência anda à volta de{" "}
              <span className="attention">UI/UX design</span> e de{" "}
              <span className="attention">frontend development</span>. No
              entanto, não tenho problemas em desenvolver para o{" "}
              <span className="attention">back office</span>. Todo o meu
              percurso académico estará disponível no meu currículo.
            </p>
            <Button content="currículo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
