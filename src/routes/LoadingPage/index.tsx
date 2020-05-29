import React, { FC } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

const LoadingPage: FC = () => (
    <Grid container alignItems="center" justify="center" style={{ height: '100vh' }}>
        <CircularProgress color="secondary" />
    </Grid>
);

export default LoadingPage;
