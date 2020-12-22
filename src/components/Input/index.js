import React, { useState } from "react";
import "./input.scss";
const Input = (props) => {
    const [value, setValue ] = useState(props.value);
    const onChangeHanlder = (e) => {
        const _value = e.target.value;
        setValue( _value );
        props.handleOnChange && props.handleOnChange( _value );
    };
    return (<input 
    type={props.type || "text"}
    autoComplete="new-password"
    placeholder={props.placeholder}
    style={props.style}
    value={ value } 
    onChange={ onChangeHanlder }
    {...props}
    />);
};
export default Input;