import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) => ({
    container: {
        padding: 5,
        backgroundColor: theme.palette.grey[300],
        minHeight: 70,

        '& b': {
            color: theme.palette.primary.main,
        },
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
}));

export default useStyles;
