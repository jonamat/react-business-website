import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const CheckedRow: FC<{ children: string }> = ({ children }) => (
    <Grid container wrap="nowrap" alignItems="center" className="symbol-row">
        <CheckRoundedIcon color="primary" className="icon-row" />
        <Typography>{children}</Typography>
    </Grid>
);

export default CheckedRow;
