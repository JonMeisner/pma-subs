import React from 'react';
import {makeStyles, ButtonGroup} from '@material-ui/core';
import TintButton from './TintButton';

const useStyles = makeStyles((theme) => ({
    show: {
        display: 'auto',
    },
    hide: {
        display: 'none',
    },
    buttonGroup: {
        justifyContent: 'center',
        display: 'flex',
    },
}))

export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.show}>
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
        </div>
    )
}