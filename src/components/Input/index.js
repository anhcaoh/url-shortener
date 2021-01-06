import React, { useState, useEffect, useRef } from "react";
import "./input.scss";
const Input = (props) => {
    const { type, name, ref, required, pattern, placeholder, style, className, defaultValue, handleOnChange, autoFocus } = props;
    const [value, setValue ] = useState( defaultValue || null );
    const inputRef = useRef(null);
    useEffect(() => {
        if (defaultValue === null && inputRef.current ) {
            inputRef.current.value = null; 
        } else if (defaultValue !== null) {
            setValue(defaultValue); 
        }
    }, [ defaultValue ]);
    const onChangeHanlder = (e) => {
        setValue( e.target.value || null );
        handleOnChange && handleOnChange( e );
    };
    return (<input ref={ref || inputRef}
    type={ type || "text"} 
    name={name}
    required={required}
    pattern={ pattern }
    autoComplete="new-password"
    autoFocus={ autoFocus }
    placeholder={placeholder}
    style={style}
    className={className}
    value={ value || "" }  // controlled input required some value even ""
    onChange={ onChangeHanlder }
    />);
};
export default Input;