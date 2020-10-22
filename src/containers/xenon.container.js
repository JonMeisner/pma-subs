import React from 'react';
import {makeStyles, ButtonGroup, Button, Paper, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    // White: #dedeff
    // Blue: #0217ff
    // Electric Blue: #0353ff
    // Mint Green: #00ff8c
    // Lime Green: #5eff01
    // Yellow: #ffff00
    // Golden Shower: #ff9600
    // Orange: #ff4000
    // Red: #ff0101
    // Pony Pink: #ff3264
    // Hot Pink: #ff05be
    // Pruple: #2301ff
    // Blacklight: #1003ff

    main: {
        justifyContent: 'center',
        display: 'auto',
        marginTop: '2%',
    },
    buttonGroup: {
        justifyContent: 'center',
        display: 'flex',
    },

    paper: {
        textAlign: 'center',
        margin: '5px',
    },
    bottomPaper: {
        textAlign: 'center',
        marginTop: 'auto',
        margin: '5px',
    },
    bottomButton: {
        minWidth: '40px',
        minHeight: '40px',
        marginTop: '5px',
        backgroundColor: '#0BA9D9',
    },

    // This is awful
    buttonWhite: {
        backgroundColor: '#dedeff',
        "&:hover": {
            backgroundColor: "#dedeff"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonBlue: {
        backgroundColor: '#0217ff',
        "&:hover": {
            backgroundColor: "#0217ff"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonElectricBlue: {
        backgroundColor: '#0353ff',
        "&:hover": {
            backgroundColor: "#0353ff"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        display: 'auto',
        fontWeight: 'bold',
    },
    buttonMintGreen: {
        backgroundColor: '#00ff8c',
        "&:hover": {
            backgroundColor: "#00ff8c"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonLimeGreen: {
        backgroundColor: '#5eff01',
        "&:hover": {
            backgroundColor: "#5eff01"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonYellow: {
        backgroundColor: '#ffff00',
        "&:hover": {
            backgroundColor: "#ffff00"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonGoldenShower: {
        backgroundColor: '#ff9600',
        "&:hover": {
            backgroundColor: "#ff9600"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonOrange: {
        backgroundColor: '#ff4000',
        "&:hover": {
            backgroundColor: "#ff4000"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonRed: {
        backgroundColor: '#ff0101',
        "&:hover": {
            backgroundColor: "#ff0101"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonPonyPink: {
        backgroundColor: '#ff3264',
        "&:hover": {
            backgroundColor: "#ff3264"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonHotPink: {
        backgroundColor: '#ff05be',
        "&:hover": {
            backgroundColor: "#ff05be"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonPurple: {
        backgroundColor: '#2301ff',
        "&:hover": {
            backgroundColor: "#2301ff"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        color: 'white',
        fontWeight: 'bold',
    },
    buttonBlackLight: {
        backgroundColor: '#0f03ff',
        "&:hover": {
            backgroundColor: "#0f03ff"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        color: "white",
    },
}))

function XenonContainer (props) {
    const classes = useStyles();
    // White	222	222	255
    // Blue	2	21	255
    // Electric Blue	3	83	255
    // Mint Green	0	255	140
    // Lime Green	94	255	1
    // Yellow	255	255	0
    // Golden Shower	255	150	0
    // Orange	255	62	0
    // Red	255	1	1
    // Pony Pink	255	50	100
    // Hot Pink	255	5	190
    // Purple	35	1	255
    // Blacklight	15	3	255
    return (
        <div className={classes.main}>
            <Paper className={classes.paper}>
                <Typography>Select a color for a preview</Typography>
            </Paper>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => {props.sendNewColor(222,222,255)}} className={classes.buttonWhite}>White</Button>
                <Button onClick={() => {props.sendNewColor(2,21,255)}} className={classes.buttonBlue}>Blue</Button>
                <Button onClick={() => {props.sendNewColor(3,83,255)}} className={classes.buttonElectricBlue}>Electric<br/>Blue</Button>        
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => {props.sendNewColor(0,255,140)}} className={classes.buttonMintGreen}>Mint<br/>Green</Button>
                <Button onClick={() => {props.sendNewColor(94,255,1)}} className={classes.buttonLimeGreen}>Lime<br/>Green</Button>
                <Button onClick={() => {props.sendNewColor(255,255,0)}} className={classes.buttonYellow}>Yellow</Button>
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => {props.sendNewColor(255,150,0)}} className={classes.buttonGoldenShower}>Golden<br/>Shower</Button>
                <Button onClick={() => {props.sendNewColor(255,62,0)}} className={classes.buttonOrange}>Orange</Button>
                <Button onClick={() => {props.sendNewColor(255,1,1)}} className={classes.buttonRed}>Red</Button>
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => {props.sendNewColor(255,50,100)}} className={classes.buttonPonyPink}>Pony<br/>Pink</Button>
                <Button onClick={() => {props.sendNewColor(255,5,190)}} className={classes.buttonHotPink}>Hot<br/>Pink</Button>
                <Button onClick={() => {props.sendNewColor(35,1,255)}} className={classes.buttonPurple}>Purple</Button>
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => {props.sendNewColor(15,3,255)}} className={classes.buttonBlackLight}><strong>Black<br/>Light</strong></Button>
            </ButtonGroup>
            <Paper className={classes.bottomPaper}>
                <Typography>Click Save to Keep Your Light Color</Typography>
            </Paper>
            <ButtonGroup className={classes.buttonGroup}>
                <Button variant="contained" onClick={() => {props.closeApplication()}} className={classes.bottomButton}>SAVE</Button>
            </ButtonGroup>
        </div>
    )
}

export default XenonContainer;