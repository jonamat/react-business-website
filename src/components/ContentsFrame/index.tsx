import React, { FC } from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './style';

interface Props {
    indent: boolean;
}

const ContentsFrame: FC<Props> = ({ children, indent }) => {
    const classes = useStyles({ indent });

    return (
        <Paper variant="outlined" className={classes.container}>
            {children}
        </Paper>
    );
};

export default ContentsFrame;
