import React from "react";
import "../styles/Skills.scss";
import Html5 from "../images/icons8-html5-70.png";
import Css3 from "../images/icons8-css3-70.png";
import JavaScript from "../images/icons8-javascript-70.png";
import MongoDB from "../images/icons8-mongo-db-70.png";
import Python from "../images/icons8-python-70.png";
import Java from "../images/icons8-java-70.png";
import RJS from "../images/icons8-react-70.png";
import MaterialUI from "../images/icons8-material-ui-70.png";
import Webflow from "../images/icons8-webflow-70.png";
import Figma from "../images/icons8-figma-70.png";
import Anaconda from "../images/icons8-anaconda-70.png";
import Github from "../images/icons8-github-70.png";
import variables from "../styles/_library.scss";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

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

export default function Skills() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="skills">
      <div className="container">
        <div className="cards">
          <div className="title">
            <h1>&#60;competências /&#62;</h1>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Html 5">
              <img src={Html5} className="skills-img" alt="Html5" /><br />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="CSS 3">
              <img src={Css3} className="skills-img" alt="CSS3" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="JavaScript ES6">
              <img src={JavaScript} className="skills-img" alt="JavaScript" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="MongoDB">
              <img src={MongoDB} className="skills-img" alt="MongoDB" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Python">
              <img src={Python} className="skills-img" alt="Python" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Java">
              <img src={Java} className="skills-img" alt="Java" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="React JS">
              <img src={RJS} className="skills-img" alt="React JS" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="MaterialUI">
              <img src={MaterialUI} className="skills-img" alt="MaterialUI" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Webflow">
              <img src={Webflow} className="skills-img" alt="Webflow" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Figma">
              <img src={Figma} className="skills-img" alt="Figma" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Anaconda">
              <img src={Anaconda} className="skills-img" alt="Anaconda" />
            </BootstrapTooltip>
          </div>
          <div className="card">
            <BootstrapTooltip placement="top" title="Github">
              <img src={Github} className="skills-img" alt="Github" />
            </BootstrapTooltip>
          </div>
        </div>
      </div>
      {/* <BootstrapTooltip followCursor placement="top" title="skills" placement="top" arrow="true">
        
      </BootstrapTooltip> */}
    </div>
  );
}

// export default Skills;
