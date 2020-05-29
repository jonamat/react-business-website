import { makeStyles, Theme } from '@material-ui/core';
import { isSafari, isIE } from 'react-device-detect';

// Static assets to preload resource with bundle
// import headerBg from '../../assets/img/header-bg.jpg';

const useStyles = makeStyles<Theme>((theme) => ({
    wrapper: {},
    background: {
        backgroundImage:
            isSafari || isIE
                ? `url(/assets/header/header-bg-600-300dpi.jpg)`
                : `url(/assets/header/header-bg-600-300dpi.webp)`,

        [theme.breakpoints.up('sm')]: {
            backgroundImage:
                isSafari || isIE
                    ? `url(/assets/header/header-bg-960-300dpi.jpg)`
                    : `url(/assets/header/header-bg-960-300dpi.webp)`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage:
                isSafari || isIE
                    ? `url(/assets/header/header-bg-1280-72dpi.jpg)`
                    : `url(/assets/header/header-bg-1280-72dpi.webp)`,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage:
                isSafari || isIE
                    ? `url(/assets/header/header-bg-1920-72dpi.jpg)`
                    : `url(/assets/header/header-bg-1920-72dpi.webp)`,
        },

        backgroundRepeat: 'no-repeat',
        height: 500,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    text: {
        color: '#fff',
        height: 500,
        padding: 30,
    },
    title: {
        marginBottom: theme.spacing(1),
        width: '100%',
        fontSize: '2rem',

        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem',
        },
    },
    subtitle: {
        fontWeight: 400,
        fontSize: '1rem',

        [theme.breakpoints.up('sm')]: {
            fontSize: '1.1rem',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem',
        },
    },
    spacer: {
        height: 35,
    },
}));

export default useStyles;
