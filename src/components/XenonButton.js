import { Button, makeStyles} from '@material-ui/core';
import React from 'react';

export default (props) => {
    const buttonColor = props.buttonColor;
    const textColor = props.textColor;
    const colorCode = props.colorCode;
    return (
    <Button style={{
        backgroundColor: buttonColor,
        maxWidth:'100px',
        maxHeight:'100px',
        minWidth:'100px',
        minHeight:'100px',
        margin:'10px',
        fontWeight:'bold',
        color:textColor,
    }} onClick={() => props.sendNewColor(colorCode)}>{props.buttonText}</Button>
    )
}