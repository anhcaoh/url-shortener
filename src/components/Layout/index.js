import React from "react";
import { Block } from "Components/Typography";
import "./layout.scss";
const Row = (props) => { 
    return (
    <Block className={ ["row", props.className].join(" ").trim() }>
        {props.children}
    </Block>
    );
};
const Columns = (props) => { 
    return (<Block className={ ["columns", props.className].join(" ").trim() }>
        {props.children}
    </Block>);
};
const Column = (props) => { 
    return (<Block className={ ["column", props.className].join(" ").trim() }>
        {props.children}
    </Block>);
};
const Card = (props) => { 
    return (<Block className={ ["card", props.className].join(" ").trim() }>
        {props.children}
    </Block>);
};

const Flexbox = (props) => { 
    return (<Block className={ ["flexbox", props.className].join(" ").trim() }>
        <Block>{props.children}</Block>
    </Block>);
};


export { Row, Columns, Column, Card, Flexbox };