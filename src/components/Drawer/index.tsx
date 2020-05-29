import React, { FC, ChangeEvent } from 'react';
import CalendarViewDayRoundedIcon from '@material-ui/icons/CalendarViewDayRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import { Drawer as MuiDrawer, List, ListItem, ListItemText, Grid, Typography, IconButton } from '@material-ui/core';
import { Pages } from '../../types';
import useStyles from './style';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import evalutateCurrentLocation from '../../functions/evalutateCurrentLocation';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

interface DrawerProps {
    handleTabChange: (event: ChangeEvent<unknown>, value: Pages) => void;
    drawerOpen: boolean;
    closeDrawer: VoidFunction;
}

const Drawer: FC<DrawerProps> = ({ drawerOpen, closeDrawer, handleTabChange }) => {
    const classes = useStyles();
    const page = evalutateCurrentLocation(location.pathname);

    return (
        <MuiDrawer classes={{ paper: classes.drawer }} anchor="right" open={drawerOpen} onClose={closeDrawer}>
            <Grid
                container
                wrap="nowrap"
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.header}
            >
                <Typography color="inherit">Seguici su </Typography>
                <div className={classes.socialButtonContainer}>
                    <IconButton color="inherit" href={'https://www.facebook.com/' + process.env.FACEBOOK_PAGE_NAME}>
                        <FacebookIcon />
                    </IconButton>

                    <IconButton color="inherit" href={'https://www.instagram.com/' + process.env.INSTAGRAM_PAGE_NAME}>
                        <InstagramIcon />
                    </IconButton>
                </div>
            </Grid>

            <div role="presentation" onClick={closeDrawer}>
                <List data-testid="pages">
                    {[
                        {
                            label: 'Home',
                            page: Pages.Home,
                            icon: <CalendarViewDayRoundedIcon color="primary" />,
                        },
                        {
                            label: 'Servizi',
                            page: Pages.Services,
                            icon: <SupervisorAccountRoundedIcon color="primary" />,
                        },
                        {
                            label: 'Prezzi',
                            page: Pages.Prices,
                            icon: <BuildRoundedIcon color="primary" />,
                        },
                        {
                            label: 'Contatti',
                            page: Pages.Contacts,
                            icon: <FaceRoundedIcon color="primary" />,
                        },
                    ].map((item) => (
                        <ListItem button key={item.label} onClick={(_e): void => handleTabChange(_e, item.page)}>
                            <ListItemText>
                                <Grid container alignItems="center" justify="center">
                                    {page === item.page && <NavigateNextRoundedIcon color="secondary" />}
                                    {item.label}
                                    {page === item.page && <NavigateBeforeRoundedIcon color="secondary" />}
                                </Grid>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        </MuiDrawer>
    );
};

export default Drawer;
