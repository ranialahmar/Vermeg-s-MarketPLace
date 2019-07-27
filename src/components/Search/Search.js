


import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SearchField from "react-search-field";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
searchInd:{
    marginLeft: theme.spacing(65),
    marginTop: theme.spacing(3),
    width: 'auto'
},
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },

        width: '200%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(55),
            marginTop: theme.spacing(5),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        height: '200%',
        width: '200%',
        [theme.breakpoints.up('sm')]: {
            width:300,
            '&:focus': {
                width: 400,
            },
        },
    },
}));


export default function Search()
{

    const classes = useStyles();

    return (
        <div className={classes.root}>

                <Toolbar>


                    <div className={classes.search}>

                        <div className={classes.searchIcon}>

                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search Product…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'Search'}}
                        />
                    </div>

                </Toolbar>

        </div>);

}