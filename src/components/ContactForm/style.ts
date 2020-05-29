import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        width: '100%',
        maxWidth: 400,
    },
    button: {
        marginTop: 10,
    },
    iconRow: {
        marginRight: 8,
    },
    response: {
        marginTop: 10,
    },
    recaptcha: {
        marginTop: 15,
        marginBottom: 15,
    },
    fallback: {
        height: 150,
    },
}));

export default useStyles;
