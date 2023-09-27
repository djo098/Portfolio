import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.scss";
import Pdf from "../documents/CV pt.pdf";

const Button = (props) => {
  return (
    <a href={Pdf} target="_blank" rel="noreferrer" className="button">
      {props.content}
    </a>
  );
};

export default Button;
