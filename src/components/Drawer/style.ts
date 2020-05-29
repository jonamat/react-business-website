import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        minWidth: 200,
    },
    header: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    socialButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
}));

export default useStyles;
