import React from "react";
const Link = (props) => {
    return (<a {...props} 
    className={["link", props.className].join(" ").trim()}>
        {props.children}
    </a>);
};
export default Link;