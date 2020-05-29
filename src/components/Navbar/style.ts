import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create('all'),
        flexWrap: 'nowrap',
    },
    logo: {
        cursor: 'pointer',
    },
    bgColor: {
        backgroundColor: theme.palette.primary.main,
    },
    onTop: {
        backgroundColor: '#fff0',
    },
    tabs: {
        display: 'none',

        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },

        minHeight: 0,
        height: 25,
        // Align with title
        marginTop: 8,
        // ... or attach to bottom
        // alignSelf: 'flex-end',
        // marginBottom: 5,
    },
    tab: {
        minWidth: 70,
        minHeight: 0,
        height: 20,
        padding: '0 8px',
        marginLeft: 5,
        borderRadius: 2,
    },
    drawerButton: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

        color: theme.palette.primary.contrastText,
    },

    socialButtonContainer: {
        display: 'none',
        flexWrap: 'nowrap',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },

        marginLeft: theme.spacing(3),
    },
}));

export default useStyles;
