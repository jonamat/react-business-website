import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<Theme, { indent: boolean }>((theme) => ({
    container: {
        position: 'relative',
        transition: theme.transitions.create('all'),
        marginTop: ({ indent }) => (indent ? -50 : 30),
        borderRadius: 30,

        padding: 10,
        margin: 10,

        [theme.breakpoints.up('sm')]: {
            padding: 30,
            margin: 30,
        },
    },
}));

export default useStyles;
