import React from 'react';
import { makeStyles, AppBar, Toolbar, Button, IconButton, ButtonGroup } from '@material-ui/core';
import { Link } from "react-router-dom";
import ExitToApp from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        color: "default",
    },
    toolBar: {
        backgroundColor: "#0BA9D9",
    },
    buttonGroup: {
        marginLeft: "auto",
    },
    centerAppBar: {
        justifyContent: 'space-evenly',
    },
    exitButton: {
        marginLeft: "10px",
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <img
                    src="img/PMALOGO.png"
                    style={{borderRadius: '50%'}}
                    height='50'
                    width='50'
                />
            <ButtonGroup className={classes.buttonGroup}>
                <Button component={Link} to="/" variant="outlined">Home</Button>
                <Button component={Link} to="/xenon" variant="outlined">Xenon</Button>
                <Button component={Link} to="/tints" variant="outlined">Tints</Button>
            </ButtonGroup>
            <IconButton component={Link} to="/" className={classes.exitButton} onClick={() => props.closeApplication()} >
                <ExitToApp />
            </IconButton>
            </Toolbar>
        </AppBar>
    )

};

{/* <Button component={Link} to="/features" variant="outlined">Features</Button> */}
{/* {/* <Button component={Link} to="/rules" variant="outlined">Rules</Button> */}