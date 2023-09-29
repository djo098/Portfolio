import React from "react";
import Button from "./Button";
import "../styles/AboutMe.scss";
import pfp from "../images/Firefly guy in sunglasses posing in front of a Torii Gate 30397.jpg";
import pfpSmall from "../images/bizniz.png";

// For the .header
import { ReactComponent as LineSvg } from "../images/50px line.svg";

import variables from "../styles/_library.scss";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CSS = {
  ctaColor: variables.ctacolor,
  ctaAlphaColor: variables.ctaalphacolor,
  darkCtaColor: variables.darkctacolor,
};

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: CSS.ctaColor,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: CSS.ctaColor,
    color: CSS.darkCtaColor,
    fontFamily: "Urbanist",
    fontWeight: 700,
    fontSize: "12px",
  },
}));

const AboutMe = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="about">
      <div className="container">
        <div className="about-grid">
          <div className="profile-pic">
            <img src={pfp} className="pfp" alt="profile pic" />
          </div>
          <div className="header">
            <LineSvg className="Svg1" /> <h1>&#60;Sobre /&#62;</h1>
            <img src={pfpSmall} className="pfp-small" alt="small profile pic" />
          </div>
          <div className="about-me-content">
            <p>
              O meu nome é{" "}
              <span className="attention bold">Diogo Coelho Mateus</span>. Tenho
              uma licenciatura em TI e vivo em Lisboa, Portugal. Tenho vastas
              competências em variados{" "}
              <BootstrapTooltip placement="top" title="Figma | AdobeXD">
                <span className="attention underline">programas de design</span>
              </BootstrapTooltip>{" "}
              e{" "}
              <BootstrapTooltip placement="top" title="ReactJS | Material UI">
                <span className="attention underline">
                  frameworks de frontend
                </span>
              </BootstrapTooltip>
              . Destaco o meu largo conhecimento em tecnologias como React e
              Bootstrap para projetar e desenvolver websites modernos e
              vibrantes. Destaco ainda a minha proficiência em{" "}
              <BootstrapTooltip placement="top" title="MERN Stack">
                <span className="attention underline">
                  tecnologias full stack
                </span>{" "}
              </BootstrapTooltip>
              ou até de{" "}
              <BootstrapTooltip placement="top" title="Django | Node.js">
                <span className="attention underline">
                  frameworks de backend
                </span>
              </BootstrapTooltip>{" "}
              permitindo-me criar websites mais complexos e abrangentes.
              <br />
              <br />
              Grande parte da minha experiência profissional está centrada no
              domínio de <span className="attention">UI/UX design</span> e de{" "}
              <span className="attention">frontend development</span>. No
              entanto, também tenho experiência sólida no desenvolvimento de
              soluções para o <span className="attention">back office</span>.
              Para obter informações detalhadas sobre o meu percurso académico,
              convido-vos a consultar o meu currículo.
            </p>
            <Button content="currículo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
