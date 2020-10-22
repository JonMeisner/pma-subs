import { makeStyles, Fade} from '@material-ui/core';
import React, { useEffect } from 'react';
import * as apis from './apis/apis';
import { useSelector, useDispatch} from 'react-redux';
import XenonContainer from './containers/xenon.container';
import Header from './components/Header';
import * as SubActions from './store/subs.actions';
import HomeContainer from './containers/home.conatiner';

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'auto',
        position: 'relative',
        height: 800,
        width: 500,
        top: '50px',
        marginLeft: 'auto',
        borderStyle: 'solid',
        backgroundColor: '#b6b6b6',
        margin: '20px',
    },
    hide: {
        display: 'none'
    }
}));




function App () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const SubMenu = useSelector((state) => state.SubMenu.showSubState);

    const closeApplication = () => {
        dispatch(SubActions.hideSubMenu());
        apis.closeSubMenu();    
    }

    const sendNewColor = (R,G,B) => {
        apis.changeColor(R,G,B)
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
        }
        if (event.data.openSubMenu === false) {
            dispatch(SubActions.hideSubMenu())
        }
    }

    return (
        <Fade in={SubMenu}>
            <div className={classes.main}>
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
                        </Switch>
                    </Router>
            </div>
        </Fade>
    )
}

export default App;