import React from "react";
import './style.css';

const AdvertiseBlock = (props) => {
    return (

        <div className="advertiseBlock" style={{backgroundColor: props.backgroundColor}}>
            {props.title && <h2 className="advertiseBlock-headline">{props.title}</h2>}
            {props.description && <p className="advertiseBlock-description">{props.description}</p>}
            {props.buttonText && <button className="advertiseBlock-button" style={props.buttonStyle}>{props.buttonText}</button>}
        </div>

    )}

export default AdvertiseBlock;