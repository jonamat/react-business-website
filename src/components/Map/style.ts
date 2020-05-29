import { makeStyles } from '@material-ui/core';
import { MAP_STYLE } from '../../config';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',

        [theme.breakpoints.up('md')]: {
            flexWrap: 'nowrap',
        },
    },
    mapContainer: {
        width: '100%',
        maxWidth: 650,
    },
    legendContainer: {
        width: 'auto',

        [theme.breakpoints.up('md')]: {
            maxWidth: 285,
        },
    },
    map: {
        width: '100%',

        '& path': {
            transition: theme.transitions.create('all', { duration: 100 }),
            stroke: MAP_STYLE.strokeColor,
            userSelect: 'unset',
        },

        [theme.breakpoints.up('md')]: {
            '& path': {
                cursor: 'pointer',
            },

            '& path:hover': {
                fill: MAP_STYLE.hoverColor + ' !important',
                strokeWidth: 3,
            },
        },
    },
    selection: {},
    legend: {
        padding: theme.spacing(1),
        width: '100%',

        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            maxWidth: 285,
        },
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    tooltip: {
        display: 'none',

        padding: '3px 6px 3px 6px',
        color: '#f0f0f0',
        backgroundColor: '#000000d9',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],

        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    bold: {
        fontWeight: 600,
    },
}));

export default useStyles;
