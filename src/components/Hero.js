import React from "react";
import { ReactComponent as LineSvg } from "../images/50px line.svg";
import { ReactComponent as MouseSvg } from "../images/mouse.svg";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="header">
          <LineSvg className="Svg1"/> <h1>&#60;HelloWorld /&#62;</h1>
        </div>
        <div className="front-text">
          O meu nome é <span className="attention">Diogo</span> e<br />
          sou um <span className="underline">web designer</span>
          <br />e um <span className="underline">frontend developer</span>.
        </div>
        <div className="scroll-guide">
            <MouseSvg className="Svg2"/> <span>Descobre mais sobre mim nas secções abaixo</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
