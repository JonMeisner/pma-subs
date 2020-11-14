import React from 'react';
import {makeStyles, ButtonGroup} from '@material-ui/core';
import TintButton from './TintButton';

const useStyles = makeStyles((theme) => ({
    show: {
        display: 'auto',
        maxHeight: 550,
        overflow: 'auto',
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
                    buttonText={"Grey"}
                    buttonColor={'#999999'}
                    textColor={"black"}
                    colorCode={1}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Two-Tone"}
                    buttonColor={'#FFD700'}
                    textColor={"black"}
                    colorCode={2}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Classic White"}
                    buttonColor={'#FFFFFF'}
                    textColor={"black"}
                    colorCode={3}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Classic Beige"}
                    buttonColor={'#E3D970'}
                    textColor={"black"}
                    colorCode={4}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Classic Green"}
                    buttonColor={'#3B6C3F'}
                    textColor={"white"}
                    colorCode={5}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Classic Blue"}
                    buttonColor={'#1736A8'}
                    textColor={"white"}
                    colorCode={6}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Classic Earth"}
                    buttonColor={'#B7AF7C'}
                    textColor={"black"}
                    colorCode={7}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Classic Brown & Black"}
                    buttonColor={'#765926'}
                    textColor={"white"}
                    colorCode={8}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Red Contrast"}
                    buttonColor={'#D41D1D'}
                    textColor={"black"}
                    colorCode={9}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Blue Contrast"}
                    buttonColor={'#386FED'}
                    textColor={"white"}
                    colorCode={10}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Yellow Contrast"}
                    buttonColor={'#F8FD00'}
                    textColor={"black"}
                    colorCode={11}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Orange Contrast"}
                    buttonColor={'#EF9408'}
                    textColor={"black"}
                    colorCode={12}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Pink"}
                    buttonColor={'#F33BED'}
                    textColor={"black"}
                    colorCode={13}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Purple & Yellow"}
                    buttonColor={'#66547A'}
                    textColor={"white"}
                    colorCode={14}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Bold Orange"}
                    buttonColor={'#E7650C'}
                    textColor={"black"}
                    colorCode={15}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Green & Purple"}
                    buttonColor={'#4AFF00'}
                    textColor={"black"}
                    colorCode={16}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Red Features"}
                    buttonColor={'#FF0000'}
                    textColor={"white"}
                    colorCode={17}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Bold Green Features"}
                    buttonColor={'#33FF00'}
                    textColor={"black"}
                    colorCode={18}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Cyan Features"}
                    buttonColor={'#00F8FF'}
                    textColor={"black"}
                    colorCode={19}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Yellow Features"}
                    buttonColor={'#FEFF00'}
                    textColor={"black"}
                    colorCode={20}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Bold Red & White"}
                    buttonColor={'#FFFFFF'}
                    textColor={"black"}
                    colorCode={21}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Bold Blue & White"}
                    buttonColor={'#2583FF'}
                    textColor={"black"}
                    colorCode={22}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Gold"}
                    buttonColor={'#B6AF23'}
                    textColor={"black"}
                    colorCode={23}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Metallic Platinum"}
                    buttonColor={'#1D4464'}
                    textColor={"white"}
                    colorCode={24}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Gray & Lilac"}
                    buttonColor={'#434C44'}
                    textColor={"white"}
                    colorCode={25}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Purple & Lime"}
                    buttonColor={'#4807E6'}
                    textColor={"white"}
                    colorCode={26}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Metallic Red"}
                    buttonColor={'#9E1111'}
                    textColor={"white"}
                    colorCode={27}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Green"}
                    buttonColor={'#139418'}
                    textColor={"black"}
                    colorCode={28}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Blue"}
                    buttonColor={'#1265EF'}
                    textColor={"black"}
                    colorCode={29}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <TintButton
                    buttonText={"Metallic White & Aqua"}
                    buttonColor={'#FFFFFF'}
                    textColor={"black"}
                    colorCode={30}
                    sendNewTint={props.sendNewTint}
                />
                <TintButton
                    buttonText={"Metallic Red & Yellow"}
                    buttonColor={'#D6D708'}
                    textColor={"black"}
                    colorCode={31}
                    sendNewTint={props.sendNewTint}
                />
            </ButtonGroup>
        </div>
    )
}