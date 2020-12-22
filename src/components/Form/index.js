import React from "react";
import "./form.scss";
const Form = ( props ) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        return event;;
    };
    return(<>
        <form onSubmit={onSubmitHandler} {...props}>
           {props.children}
        </form>
</>);
};
export default Form;