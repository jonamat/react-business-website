import React, { FC, ReactElement } from 'react';
import { useScrollTrigger } from '@material-ui/core';

interface Props {
    // Min pixels scroll to elevate navbar
    threshold?: number;
    // Elevation of paper component from 0 to 24
    elevation?: number;
    children: ReactElement;
}

const ElevationScroll: FC<Props> = ({ children, threshold, elevation }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold,
    });

    return React.cloneElement(children, {
        elevation: trigger ? elevation : 0,
    });
};

ElevationScroll.defaultProps = {
    threshold: 0,
    elevation: 4,
};

export default ElevationScroll;
