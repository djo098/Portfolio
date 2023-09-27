import React from "react";
import "../styles/Button.scss";

const Button = (props) => {
    return(
        <div className="button">
            { props.content }
        </div>
    );
}

export default Button;