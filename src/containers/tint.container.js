import React from 'react';
import {makeStyles, ButtonGroup, Button, Paper, Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { Link, Router } from "react-router-dom";
import IMAGE from '../assets/armyTint.png';

const useStyles = makeStyles((theme) => ({
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
    paper: {
        textAlign: 'center',
        margin: '5px',
    },
    buttonGroup: {
        justifyContent: 'center',
        display: 'flex',
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
    buttonBlack: {
        backgroundColor: '#000000',
        "&:hover": {
            backgroundColor: "#000000"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonGreen: {
        backgroundColor: '#45934C',
        "&:hover": {
            backgroundColor: "#45934C"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonGold: {
        backgroundColor: '#FFD700',
        "&:hover": {
            backgroundColor: "#FFD700"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonPink: {
        backgroundColor: '#FF69B4',
        "&:hover": {
            backgroundColor: "#FF69B4"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonArmy: {
        backgroundColor: '#6C552B',
        "&:hover": {
            backgroundColor: "#6C552B"
        },
        maxWidth: '100px',
        maxHeight: '100px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
        color: "white",
    },
    buttonLSPD: {
        backgroundColor: '#1F43AD',
        "&:hover": {
            backgroundColor: "#1F43AD"
        },
        // maxWidth: '100px',
        // maxHeight: '100px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
        color: "white",
    },
    buttonOrange: {
        backgroundColor: '#EF9408',
        "&:hover": {
            backgroundColor: "#EF9408"
        },
        // maxWidth: '30px',
        // maxHeight: '30px',
        minWidth: '100px',
        minHeight: '100px',
        margin: '10px',
        fontWeight: 'bold',
    },
    buttonPlatinum: {
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
    paperOwner: {
        textAlign: 'center',
        margin: '5px',
        marginTop: '50%',
    },
}))

function TintContainer (props) {
    const classes = useStyles();
    const weaponState = useSelector((state) => state.SubMenu.hasWeapon)
    return (
        <div className={classes.main}>

            <div className={weaponState === true ? classes.show : classes.hide}>
                <Paper className={classes.paper}>
                    <Typography>Click a Tint to Preview on your Weapon</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography>Works Best on Non-Mk2 Weapons</Typography>
                </Paper>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button className={classes.buttonBlack} onClick={() => props.sendNewTint(0)}>Black</Button>
                    <Button className={classes.buttonGreen} onClick={() => props.sendNewTint(1)}>Green</Button>
                    <Button className={classes.buttonGold} onClick={() => props.sendNewTint(2)}>Gold</Button>
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button className={classes.buttonPink} onClick={() => props.sendNewTint(3)}>Pink</Button>
                    <Button className={classes.buttonArmy} onClick={() => props.sendNewTint(4)}>Army</Button>
                    <Button className={classes.buttonLSPD} onClick={() => props.sendNewTint(5)}>LSPD</Button>
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button className={classes.buttonOrange} onClick={() => props.sendNewTint(6)}>Orange</Button>
                    <Button className={classes.buttonPlatinum} onClick={() => props.sendNewTint(7)}>Platinum</Button>
                </ButtonGroup>
                <Paper className={classes.bottomPaper}>
                    <Typography>Click Save to Keep Your Weapon Tint</Typography>
                </Paper>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button component={Link} to="/" variant="contained" onClick={() => {props.closeApplication()}} className={classes.bottomButton}>SAVE</Button>
                </ButtonGroup>
            </div>
            <div className={weaponState === false ? classes.show : classes.hide}>
                <Paper className={classes.paperOwner}>
                    <Typography>
                        Weapon in Hand Required
                    </Typography>
                </Paper>
            </div>
        </div>
    )
}

export default TintContainer;