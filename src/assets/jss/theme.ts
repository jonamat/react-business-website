import { createMuiTheme } from '@material-ui/core/styles';
// import { itIT } from '@material-ui/core/locale';

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#218bb8',
                light: '#59a8ca',
            },
            secondary: {
                main: '#c94c3b',
                light: '#e25344',
            },
        },
        typography: {
            allVariants: {
                fontFamily: "'Montserrat', 'Helvetica', sans-serif;",
            },
            body1: {
                color: '#676767',
            },
        },
    },
    // itIT,
);

export default theme;
