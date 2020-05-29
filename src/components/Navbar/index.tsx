import React, { FC, ChangeEvent, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    TabClassKey,
    useScrollTrigger,
    Collapse,
    IconButton,
} from '@material-ui/core';
import ElevationScroll from './ElevationScroll';
import { SCROLLTOP_THRESHOLD } from '../../config';
import classNames from 'classnames';
import useStyles from './style';
import { Pages } from '../../types';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import Drawer from '../Drawer';
import evalutateCurrentLocation from '../../functions/evalutateCurrentLocation';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

interface Props {
    handleTabChange: (event: ChangeEvent<unknown>, value: Pages) => void;
}

const Navbar: FC<Props> = ({ handleTabChange }) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const isOnTop = !useScrollTrigger({ target: window, disableHysteresis: true, threshold: SCROLLTOP_THRESHOLD });
    const page = evalutateCurrentLocation(location.pathname);
    const isHomepage = page === Pages.Home;
    const classes = useStyles();
    const tabClasses: Partial<Record<TabClassKey, string>> = {
        root: classes.tab,
    };

    return (
        <>
            <ElevationScroll threshold={SCROLLTOP_THRESHOLD}>
                <AppBar
                    classes={{
                        root: classNames(classes.appBar, classes.bgColor, isOnTop && isHomepage && classes.onTop),
                    }}
                >
                    <Toolbar>
                        <Typography
                            className={classes.logo}
                            variant="h6"
                            onClick={(event) => handleTabChange(event, Pages.Home)}
                            component="h1"
                        >
                            Assistenza PC Mantova
                        </Typography>

                        <div className={classes.grow} />

                        <Tabs classes={{ root: classes.tabs }} value={page} onChange={handleTabChange}>
                            <Tab classes={tabClasses} label="Home" />
                            <Tab classes={tabClasses} label="Servizi" />
                            <Tab classes={tabClasses} label="Prezzi" />
                            <Tab classes={tabClasses} label="Contatti" />
                        </Tabs>

                        <IconButton className={classes.drawerButton} onClick={() => setDrawerOpen(true)}>
                            <ListRoundedIcon />
                        </IconButton>

                        <div className={classes.socialButtonContainer}>
                            <IconButton
                                color="inherit"
                                href={'https://www.facebook.com/' + process.env.FACEBOOK_PAGE_NAME}
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                color="inherit"
                                href={'https://www.instagram.com/' + process.env.INSTAGRAM_PAGE_NAME}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            {/* Spacer */}
            <Collapse in={!isHomepage}>
                <Toolbar className={classes.bgColor} />
            </Collapse>

            <Drawer
                drawerOpen={drawerOpen}
                closeDrawer={() => setDrawerOpen(false)}
                handleTabChange={handleTabChange}
            />
        </>
    );
};

export default Navbar;
