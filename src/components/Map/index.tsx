import React, { FC, useEffect, useState } from 'react';
import MapSVG from './map.svg';
import municipalitiesIds from './municipalitiesIds.json';
import {
    Tooltip,
    Popper,
    Fade,
    Typography,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from '@material-ui/core';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import useStyles from './style';
import { AREAS, MAP_STYLE } from '../../config';
import { Areas } from '../../types';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import AdjustRoundedIcon from '@material-ui/icons/AdjustRounded';

interface CurrentArea {
    area: Areas;
    areaName: string;
}

interface Tooltip {
    open: boolean;
    title: string;
    anchor?: HTMLElement;
}

export type OnChangeCallback = (options?: Partial<CurrentArea>) => void;

interface Props {
    handleSetArea: (area: Areas) => void;
    onChange?: OnChangeCallback;
}

const evalutateArea = (id: keyof typeof municipalitiesIds): Areas => {
    if (AREAS.a.includes(id)) {
        return 'A';
    } else if (AREAS.b.includes(id)) {
        return 'B';
    } else {
        return 'C';
    }
};

const evalutateFillColor = (area: Areas): string => {
    switch (area) {
        case 'A':
            return MAP_STYLE.areaAColor;
        case 'B':
            return MAP_STYLE.areaBColor;
        case 'C':
            return MAP_STYLE.areaCColor;
    }
};

let selected: keyof typeof municipalitiesIds = 'nw6oax2s'; // Entry municipality (Mantova)

const Map: FC<Props> = ({ handleSetArea, onChange }) => {
    const classes = useStyles();
    const [areaDetails, setAreaDetails] = useState<CurrentArea>({ area: 'A', areaName: 'Mantova' });
    const [tooltip, setTooltip] = useState<Tooltip>({ open: false, title: '' });

    const handleMapClick = (event: MouseEvent, id: keyof typeof municipalitiesIds) => {
        event.preventDefault();
        if (id === selected) return;

        const currentElement = document.getElementById(selected) as HTMLElement;
        const nextElement = event.target as HTMLElement;

        // Restore previous color to the current selection
        currentElement.style.fill = evalutateFillColor(evalutateArea(selected));

        // Assign the new color to the new selection
        selected = id;

        nextElement.style.fill = MAP_STYLE.selectionColor;

        const area = evalutateArea(id);

        handleSetArea(area);
        setAreaDetails({ area, areaName: municipalitiesIds[id] });

        if (onChange) onChange({ ...areaDetails });
    };

    const handleMapHover = (event: MouseEvent, id: keyof typeof municipalitiesIds) => {
        event.preventDefault();
        setTooltip({ open: true, anchor: event.target as HTMLElement, title: municipalitiesIds[id] });
    };

    useEffect(() => {
        // Set municipalities colors to SVG map sorted by ID
        // let id: keyof typeof municipalitiesIds;
        for (const id in municipalitiesIds) {
            const element = document.getElementById(id);

            if (!element) {
                console.error(`Polygon id ${id} not found`);
                continue;
            }

            element.style.fill = evalutateFillColor(evalutateArea(id));

            element.onclick = (event: MouseEvent) => handleMapClick(event, id);
            element.onmouseenter = (event: MouseEvent) => handleMapHover(event, id);
            element.onmouseleave = () => setTooltip({ title: municipalitiesIds[id], open: false });
        }

        // Set first selection
        (document.getElementById(selected) as HTMLElement).style.fill = MAP_STYLE.selectionColor;
    }, []);

    return (
        <Grid container className={classes.container} spacing={2} justify="center">
            <Grid
                className={classes.mapContainer}
                item
                xs={12}
                md="auto"
                container
                alignItems="center"
                justify="center"
            >
                <MapSVG className={classes.map} />
            </Grid>

            <Grid
                className={classes.legendContainer}
                item
                xs={12}
                md="auto"
                container
                alignItems="center"
                justify="center"
            >
                <Paper className={classes.legend} variant="outlined">
                    <Grid container>
                        <Grid item xs={7} md={12} container alignItems="center">
                            <List dense={true}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <LocationCityRoundedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        classes={{ primary: classes.bold }}
                                        primary={areaDetails.areaName}
                                        secondary="Comune selezionato"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            <AdjustRoundedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        classes={{ primary: classes.bold }}
                                        primary={areaDetails.area}
                                        secondary="Zona assegnata"
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid
                            item
                            xs={5}
                            md={12}
                            container
                            direction="column"
                            justify="center"
                            spacing={1}
                            className={classes.legend}
                        >
                            <Grid item container alignItems="center" wrap="nowrap">
                                <Typography color="inherit">
                                    <b>Zone di intervento</b>
                                </Typography>
                            </Grid>
                            <Grid item container alignItems="center" wrap="nowrap">
                                <FiberManualRecordRoundedIcon style={{ color: MAP_STYLE.areaAColor }} />
                                &nbsp;
                                <Typography display="inline">Zona A</Typography>
                            </Grid>
                            <Grid item container alignItems="center" wrap="nowrap">
                                <FiberManualRecordRoundedIcon style={{ color: MAP_STYLE.areaBColor }} />
                                &nbsp;
                                <Typography display="inline">Zona B</Typography>
                            </Grid>
                            <Grid item container alignItems="center" wrap="nowrap">
                                <FiberManualRecordRoundedIcon style={{ color: MAP_STYLE.areaCColor }} />
                                &nbsp;
                                <Typography display="inline">Zona C</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <Popper open={tooltip.open} anchorEl={tooltip.anchor} transition placement="top">
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps}>
                            <div className={classes.tooltip}>
                                <Typography variant="body2">{tooltip.title}</Typography>
                            </div>
                        </Fade>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
};

export default Map;
