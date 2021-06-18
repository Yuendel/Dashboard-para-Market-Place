import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';



export default function Loading(props) {
    const classes = useStyles();

    return (
        <div>

            <Backdrop className={classes.backdrop} open={props.open} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}