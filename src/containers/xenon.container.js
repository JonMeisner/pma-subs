import React from 'react';
import {makeStyles, ButtonGroup, Button, Paper, Typography} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { Link, Router } from "react-router-dom";
import XenonButton from '../components/XenonButton';


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
    hide: {
        display: 'none',
    },
    show: {
        display: 'auto',
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
    paperOwner: {
        textAlign: 'center',
        margin: '5px',
        marginTop: '50%',
    },
}))

function XenonContainer (props) {
    const classes = useStyles();
    const ownerState = useSelector((state) => state.SubMenu.isOwner);
    const vehicleState = useSelector((state) => state.SubMenu.inVehicle)
    return (
        <div className={classes.main}>
            <div className={ownerState === true ? classes.show : classes.hide}>
                <Paper className={classes.paper}>
                    <Typography>Select a color for a preview</Typography>
                </Paper>
                <ButtonGroup className={classes.buttonGroup}>
                    <XenonButton
                        buttonText={"White"}
                        buttonColor={'#dedeff'}
                        textColor={"black"}
                        colorCode={0}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Blue"}
                        buttonColor={'#0217ff'}
                        textColor={"white"}
                        colorCode={1}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Electric Blue"}
                        buttonColor={'#0353ff'}
                        textColor={"black"}
                        colorCode={2}
                        sendNewColor={props.sendNewColor}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <XenonButton
                        buttonText={"Mint Green"}
                        buttonColor={'#00ff8c'}
                        textColor={"black"}
                        colorCode={3}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Lime Green"}
                        buttonColor={'#5eff01'}
                        textColor={"black"}
                        colorCode={4}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Yellow"}
                        buttonColor={'#ffff00'}
                        textColor={"black"}
                        colorCode={5}
                        sendNewColor={props.sendNewColor}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <XenonButton
                        buttonText={"Golden Shower"}
                        buttonColor={'#ff9600'}
                        textColor={"black"}
                        colorCode={6}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Orange"}
                        buttonColor={'#ff4000'}
                        textColor={"black"}
                        colorCode={7}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Red"}
                        buttonColor={'#ff0101'}
                        textColor={"black"}
                        colorCode={8}
                        sendNewColor={props.sendNewColor}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <XenonButton
                        buttonText={"Pony Pink"}
                        buttonColor={'#ff3264'}
                        textColor={"black"}
                        colorCode={9}
                        sendNewColor={props.sendNewColor}
                    />
                    <XenonButton
                        buttonText={"Hot Pink"}
                        buttonColor={'#ff05be'}
                        textColor={"black"}
                        colorCode={10}
                        sendNewColor={props.sendNewColor}
                    />                
                    <XenonButton
                        buttonText={"Purple"}
                        buttonColor={'#2301ff'}
                        textColor={"white"}
                        colorCode={11}
                        sendNewColor={props.sendNewColor}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <XenonButton
                        buttonText={"Hot Pink"}
                        buttonColor={'#0f03ff'}
                        textColor={"white"}
                        colorCode={12}
                        sendNewColor={props.sendNewColor}
                    />
                </ButtonGroup>
                <Paper className={classes.bottomPaper}>
                    <Typography>Click Save to Keep Your Light Color</Typography>
                </Paper>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button component={Link} to="/" variant="contained" onClick={() => {props.closeApplication()}} className={classes.bottomButton}>SAVE</Button>
                </ButtonGroup>
            </div>
            <div className={ownerState === false && vehicleState === true ? classes.show : classes.hide}>
                <Paper className={classes.paperOwner}>
                    <Typography>
                        You Must Own This Vehicle to Change it's Xenon Color
                    </Typography>
                </Paper>
            </div>
            <div className={vehicleState === false && ownerState == false ? classes.show : classes.hide}>
                <Paper className={classes.paperOwner}>
                    <Typography>
                        Vehicle Required
                    </Typography>
                </Paper>
            </div>
        </div>
    )
}

export default XenonContainer;