import React, { FC } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';

// Assets
import Img05 from '../../assets/img/img-05.png';

const NotFound: FC<RouteComponentProps> = ({ history }) => {
    return (
        <Grid container spacing={2} alignItems="center" direction="column">
            <Grid item container alignItems="center" justify="center">
                <img src={Img05} className="not-found-img" alt="404" />
            </Grid>

            <Grid item>
                <Typography variant="h6" align="center">
                    Pagina non trovata
                </Typography>
            </Grid>

            <Grid item>
                <Button variant="outlined" color="primary" onClick={() => history.push('/')}>
                    Torna alla Home
                </Button>
            </Grid>
        </Grid>
    );
};

export default withRouter(NotFound);
