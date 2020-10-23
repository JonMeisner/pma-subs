import React from 'react';
import {makeStyles, ButtonGroup, Button, Paper, Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, Router } from "react-router-dom";
import TintButton from '../components/TintButton';

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
                    <TintButton
                        buttonText={"Black"}
                        buttonColor={'#000000'}
                        textColor={"white"}
                        colorCode={0}
                        sendNewTint={props.sendNewTint}
                    />
                    <TintButton
                        buttonText={"Green"}
                        buttonColor={'#45934C'}
                        textColor={"white"}
                        colorCode={1}
                        sendNewTint={props.sendNewTint}
                    />
                    <TintButton
                        buttonText={"Gold"}
                        buttonColor={'#FFD700'}
                        textColor={"black"}
                        colorCode={2}
                        sendNewTint={props.sendNewTint}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <TintButton
                        buttonText={"Pink"}
                        buttonColor={'#FF69B4'}
                        textColor={"black"}
                        colorCode={3}
                        sendNewTint={props.sendNewTint}
                    />
                    <TintButton
                        buttonText={"Army"}
                        buttonColor={'#6C552B'}
                        textColor={"white"}
                        colorCode={4}
                        sendNewTint={props.sendNewTint}
                    />
                    <TintButton
                        buttonText={"LSPD"}
                        buttonColor={'#1F43AD'}
                        textColor={"white"}
                        colorCode={5}
                        sendNewTint={props.sendNewTint}
                    />
                </ButtonGroup>
                <ButtonGroup className={classes.buttonGroup}>
                    <TintButton
                        buttonText={"Orange"}
                        buttonColor={'#EF9408'}
                        textColor={"black"}
                        colorCode={6}
                        sendNewTint={props.sendNewTint}
                    />
                    <TintButton
                        buttonText={"Platinum"}
                        buttonColor={'#dedeff'}
                        textColor={"black"}
                        colorCode={7}
                        sendNewTint={props.sendNewTint}
                    />
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