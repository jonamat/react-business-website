import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './style';

const Footer: FC = () => {
    const classes = useStyles();

    const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.open('mailto:' + process.env.EMAIL, '_blank');
    };

    return (
        <Grid className={classes.container} container justify="center" alignItems="center">
            <Typography variant="caption" align="center">
                Realizzato da:&nbsp;
                <b>
                    <a className={classes.link} href="https://wedial.it">
                        Wedial
                    </a>
                </b>
                . Partita iva:&nbsp;<b>13903301003</b>. Email&nbsp;
                <b>
                    <a className={classes.link} href="#" onClick={handleEmailClick}>
                        info@assistenza-pc-matova.it
                    </a>
                </b>
                . Link alla&nbsp;
                <b>
                    <a className={classes.link} rel="nofollow" href="/public/privacy-policy.html">
                        Privacy policy
                    </a>
                </b>
                .&nbsp;Seguici su&nbsp;
                <b>
                    <a className={classes.link} href={'https://www.facebook.com/' + process.env.FACEBOOK_PAGE_NAME}>
                        Facebook
                    </a>
                </b>
                ,&nbsp;
                <b>
                    <a className={classes.link} href={'https://www.instagram.com/' + process.env.INSTAGRAM_PAGE_NAME}>
                        Instagram
                    </a>
                </b>
                &nbsp;e&nbsp;
                <b>
                    <a className={classes.link} href={'https://www.misterimprese.it/' + process.env.MISTERIMPRESE_PATH}>
                        MisterImprese
                    </a>
                </b>
            </Typography>
        </Grid>
    );
};

export default Footer;
