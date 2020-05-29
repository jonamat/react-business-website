import React, { FC, useState } from 'react';
import { Collapse, Grid, Typography, Fade } from '@material-ui/core';
import useStyles from './style';
import Typewriter from 'typewriter-effect';
import Defer from '../Defer';

interface Props {
    collapse: boolean;
}

const Header: FC<Props> = ({ collapse }) => {
    const classes = useStyles();
    const [showText, setShowText] = useState<boolean>(false);

    const onInitTypewriter = (typewriter) => {
        typewriter
            .typeString('Rimani connesso')
            .pauseFor(500)
            .callFunction(() => {
                setShowText(true);
            })
            .start();
    };

    return (
        <Collapse
            in={collapse}
            className={classes.wrapper}
            onEntered={() => setShowText(true)}
            onExit={() => setShowText(false)}
        >
            <div className={classes.background}>
                <Grid className={classes.text} container direction="column" justify="flex-end">
                    <Defer render="pageLoaded">
                        <Typography variant="h2" className={classes.title} component="div">
                            <Typewriter onInit={onInitTypewriter} />
                        </Typography>
                    </Defer>

                    <Fade in={showText} timeout={700}>
                        <Typography variant="h6" className={classes.subtitle} component="h1">
                            Assistenza PC e reti a domicilio per la provincia di Mantova
                        </Typography>
                    </Fade>
                    <div className={classes.spacer} />
                </Grid>
            </div>
        </Collapse>
    );
};

export default Header;
