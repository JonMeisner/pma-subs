import React from 'react';
import {makeStyles, ButtonGroup, Button, Paper, Typography, Card, CardActionArea, CardContent, CardMedia, Tab, Tabs} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, Router } from "react-router-dom";
import TintButton from '../components/TintButton';
import NormalTintButtons from '../components/NormalTintButtons';
import Mk2Buttons from '../components/Mk2Buttons';

const useStyles = makeStyles((theme) => ({
    main: {
        justifyContent: 'center',
        display: 'auto',
        //marginTop: '2%',
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
    const [category, setCategory] = React.useState(0);
    const weaponState = useSelector((state) => state.SubMenu.hasWeapon)

    const handleCategory = (newCategory) => {
        setCategory(newCategory);
    }

    return (
        <div className={classes.main}>

            <div className={weaponState === true ? classes.show : classes.hide}>
                <Paper>
                    <Tabs
                        value={category}
                        onChange={(event, newCategory) => handleCategory(newCategory)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Normal"/>
                        <Tab label="Mk2"/>
                    </Tabs>
                </Paper>
                <div className={category === 0 ? classes.show : classes.hide}>
                    <Paper className={classes.paper}>
                        <Typography>Click a Tint to Preview on your Weapon</Typography>
                    </Paper>
                    <NormalTintButtons sendNewTint={props.sendNewTint}/>
                    <Paper className={classes.bottomPaper}>
                        <Typography>Click Save to Keep Your Weapon Tint</Typography>
                    </Paper>
                    <ButtonGroup className={classes.buttonGroup}>
                        <Button component={Link} to="/" variant="contained" onClick={() => {props.closeApplication()}} className={classes.bottomButton}>SAVE</Button>
                    </ButtonGroup>
                </div>
                <div className={category === 1 ? classes.show : classes.hide}>
                    <Paper className={classes.paper}>
                        <Typography>Click a Tint to Preview on your Weapon</Typography>
                    </Paper>
                    <Mk2Buttons sendNewTint={props.sendNewTint}/>
                    <Paper className={classes.bottomPaper}>
                        <Typography>Click Save to Keep Your Weapon Tint</Typography>
                    </Paper>
                    <ButtonGroup className={classes.buttonGroup}>
                        <Button component={Link} to="/" variant="contained" onClick={() => {props.closeApplication()}} className={classes.bottomButton}>SAVE</Button>
                    </ButtonGroup>
                </div>
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