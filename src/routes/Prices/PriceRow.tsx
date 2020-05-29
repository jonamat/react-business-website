import React, { FC } from 'react';
import { Typography, Grid } from '@material-ui/core';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

interface Props {
    children: string;
    price?: string | number;
    endSymbol?: string | boolean;
}

const PriceRow: FC<Props> = ({ children, price, endSymbol }) => {
    return (
        <Grid container wrap="nowrap" alignItems="center" className="symbol-row">
            <ArrowRightRoundedIcon color="primary" className="icon-row" />
            <div>
                <Typography display="inline">{children}</Typography>
                {price && (
                    <>
                        :&nbsp;&nbsp;
                        <Typography display="inline" color="primary">
                            <b>
                                {price}
                                {endSymbol}
                            </b>
                        </Typography>
                    </>
                )}
            </div>
        </Grid>
    );
};

PriceRow.defaultProps = {
    endSymbol: '€',
};

export default PriceRow;
