import React from 'react';
import { Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        margin: '5px',
    },
    paper: {
        textAlign: 'center',
        margin: '5px',
    },
    bottomPaper: {
        textAlign: 'center',
        marginTop: 'auto',
        margin: '5px',
    }
}));

function HomeContainer () {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Paper className={classes.paper}>
                <Typography variant="h6">Welcome Subscriber!</Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Typography variant="body1">This is your custom menu to help you access some of your sub features!</Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Typography variant="body2">REMINDER!<br/> All features in this menu are Temporary. For example,<br/>
                when you put your car back into the garage the headlights will be back to the normal xenon color</Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Typography variant="body2">Weapon tints are also temporary and are removed<br/>when placed in a trunk
                or when you logout</Typography>
            </Paper>
            <Paper className={classes.bottomPaper}>
                <Typography variant="body1">PMA thanks you for your continued support and are actively working to bring you new features!</Typography>
            </Paper>

        </div>
    )
}

export default HomeContainer;