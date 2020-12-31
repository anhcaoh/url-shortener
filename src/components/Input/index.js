import React, { useState } from "react";
import "./input.scss";
const Input = (props) => {
    const { type, placeholder, style, className, defaultValue, handleOnChange, autoFocus } = props;
    const [value, setValue ] = useState( defaultValue || "" );
    const onChangeHanlder = (e) => {
        const _value = e.target.value;
        setValue( _value );
        handleOnChange && handleOnChange( _value );
    };
    return (<input
    type={ type || "text"}
    autoComplete="new-password"
    autoFocus={ autoFocus }
    placeholder={placeholder}
    style={style}
    className={className}
    value={ value } 
    onChange={ onChangeHanlder }
    />);
};
export default Input;