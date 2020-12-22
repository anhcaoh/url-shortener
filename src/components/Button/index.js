import React from "react";
import "./button.scss";
const Button = (props) => {
    return (<button {...props} 
    type={props.type || "button"}
    className={["button", props.className].join(" ").trim()} />);
};
export default Button;