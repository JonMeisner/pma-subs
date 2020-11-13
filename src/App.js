import React, { useEffect } from 'react';
import * as apis from './apis/apis';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import * as SubActions from './store/subs.actions';

import Header from './components/Header';
import XenonContainer from './containers/xenon.container';
import HomeContainer from './containers/home.container';
import TintContainer from './containers/tint.container';



const useStyles = makeStyles((theme) => ({
    main: {
        display: 'auto',
        position: 'relative',
        height: 800,
        width: 500,
        top: '10px',
        borderStyle: 'solid',
        backgroundColor: '#b6b6b6',
        margin: '20px',
    },
    hide: {
        display: 'none'
    }
}));

const theme = createMuiTheme({
    plate: {
        primary: {
            main: "rgb(11,169,217)"
        },
        secondary: {
            main: "rgb()"
        }
    }
})

function App () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const SubMenu = useSelector((state) => state.SubMenu.showSubState);

    const closeApplication = () => {
        //dispatch(SubActions.hideSubMenu());
        dispatch(SubActions.clearData());
        apis.closeSubMenu();    
    } 

    const sendNewColor = (colorCode) => {
        apis.changeColor(colorCode)
    }

    const sendNewTint = (colorCode) => {
        apis.changeTint(colorCode)
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => onKeyPress(e));
        return (e) => {
            
            if (e.keyCode === 27) {
                document.removeEventListener("keydown", (e) => onKeyPress(e));
            }
        };
    }, []);
    
    const onKeyPress = (e) => {
        if (e.keyCode === 27) {
            closeApplication();
        }
    }
    
    useEffect(() => {
        window.addEventListener("message", (e) => onMessage(e));
        return () => {
            window.removeEventListener("message", (e) => onMessage(e));
        };
    }, []);
    
    const onMessage = (event) => {
        if (event.data.openSubMenu === true) {
            dispatch(SubActions.showSubMenu());
            dispatch(SubActions.setOwner(event.data.ownsCar));
            dispatch(SubActions.setWeaponState(event.data.hasWeapon));
            if (event.data.vehicleState === 1) {
                dispatch(SubActions.setVehicleState(true));
            }
        }
        if (event.data.openSubMenu === false) {
            // dispatch(SubActions.hideSubMenu())
            dispatch(SubActions.clearData());
        }
    }

    return (
        <div className={SubMenu === true ? classes.main : classes.hide}>
            <Router>
                <Header closeApplication={closeApplication}/>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>

                    <Route path="/xenon">
                        <XenonContainer 
                            closeApplication={closeApplication}
                            sendNewColor={sendNewColor}
                        />
                    </Route>
                    
                    <Route path="/tints">
                        <TintContainer sendNewTint={sendNewTint}
                        closeApplication={closeApplication}/>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default App;