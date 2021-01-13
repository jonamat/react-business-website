import React, { useState, FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Grid, Typography, Button } from '@material-ui/core';
import ReactGA from 'react-ga';

import Map, { OnChangeCallback } from '../../components/Map';
import { Areas } from '../../types';
import setPageMeta from '../../utils/setPageMeta';
import { devMode } from '../../config';

// Sub-components
import { calcPrice } from './listino';
import PriceRow from './PriceRow';

// Assets
import Icon12 from '../../assets/img/icon-12.png';
import Icon13 from '../../assets/img/icon-13.png';
import Icon14 from '../../assets/img/icon-14.png';
import Icon15 from '../../assets/img/icon-15.png';
import Icon16 from '../../assets/img/icon-16.png';
import Icon17 from '../../assets/img/icon-17.png';
import Icon18 from '../../assets/img/icon-18.png';
import Icon19 from '../../assets/img/icon-19.png';
import Icon20 from '../../assets/img/icon-20.png';
import Prices1 from '../../assets/img/img-04.png';
import Prices2 from '../../assets/img/img-06.png';

const Prices: FC<RouteComponentProps> = ({ history }) => {
    const [area, setArea] = useState<Areas>('A');
    const handleSetArea = (area: Areas) => setArea(area);

    setPageMeta({
        title: 'Prezzi per supporto tecnico PC e reti Mantova',
        description:
            "Prezzi per riparazione, assistenza e configurazione PC e reti, interventi a domicilio e tariffa oraria del tecnico, divisi per comune d'intervento",
    });

    const handleAreaChange: OnChangeCallback = (options) => {
        !devMode &&
            ReactGA.event({
                category: 'Interaction',
                action: 'Comune selezionato',
                label: options?.areaName,
            });
    };

    return (
        <>
            {/* Title */}
            <section className="no-top">
                <Grid container direction="column">
                    <Typography align="center" variant="h4" component="h1" gutterBottom>
                        Prezzi
                    </Typography>
                    <Typography align="center" variant="subtitle1" component="h2">
                        I prezzi per gli interventi a domicilio variano in base al raggio da percorrere per raggiungere
                        il luogo d&#39;intervento; la tariffa oraria del tecnico rimane invece invariata. Nella cartina
                        in basso puoi vedere le 3 zone che abbiamo definito e selezionare il tuo comune.
                    </Typography>
                </Grid>
            </section>

            {/* Map */}
            <section>
                <Typography align="center" variant="h6" component="p">
                    Seleziona il comune d&#39;intervento
                </Typography>
                <Typography align="center" gutterBottom>
                    Verranno aggiornati automaticamente i prezzi presenti nella pagina per il comune selezionato
                </Typography>
                <Map handleSetArea={handleSetArea} onChange={handleAreaChange} />
            </section>

            {/* Single services prices */}
            <section>
                <Grid container direction="column" spacing={4}>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon12} className="tab-icon" alt="Assistenza PC a domicilio" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Chiamata a domicilio
                            </Typography>
                            <PriceRow price={calcPrice('chiamata', area)}>
                                Chiamata a domicilio su prenotazione
                            </PriceRow>
                            <PriceRow price={calcPrice('chiamataEmergenza', area)}>
                                Chiamata a domicilio d&#39;emergenza (festivi in orario di lavoro)
                            </PriceRow>
                            <PriceRow price={calcPrice('chimataNotturna', area)}>
                                Chiamata a domicilio d&#39;emergenza (notturno)
                            </PriceRow>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon13} className="tab-icon" alt="Ritiro PC a domicilio" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Ritiro e consegna dispositivo guasto
                            </Typography>
                            <PriceRow price={calcPrice('andataRitorno', area)}>Andata e ritorno</PriceRow>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon14} className="tab-icon" alt="Sostituzione schermo PC portatile" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Intervento sul posto
                            </Typography>
                            <PriceRow price={calcPrice('sulPosto', area)}>Tariffa oraria</PriceRow>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon15} className="tab-icon" alt="Riparazione PC" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Riparazione in sede
                            </Typography>
                            <PriceRow price={calcPrice('inSede', area)}>Tariffa oraria</PriceRow>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon16} className="tab-icon" alt="Tecnico PC" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Assistenza remota
                            </Typography>
                            <PriceRow price={calcPrice('remota', area)}>Tariffa oraria</PriceRow>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon17} className="tab-icon" alt="Tecnico PC da remoto" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6">
                                Consulenza telefonica
                            </Typography>
                            <PriceRow price={calcPrice('telefonica', area)}>Tariffa oraria</PriceRow>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            {/* Img + description */}
            <section>
                <Grid container justify="space-between" spacing={2}>
                    <Grid className="text" item container xs={12} md={7} direction="column" justify="center">
                        <Typography variant="h6" align="left" component="p" gutterBottom color="secondary">
                            Risparmia fino al 25% sulla chiamata
                        </Typography>
                        <Typography variant="h3" align="left" component="p" gutterBottom color="primary">
                            Pacchetti a consumo
                        </Typography>
                        <Typography align="left">
                            Se necessiti spesso di assistenza per i tuoi apparati, puoi risparmiare <b>fino al 25%</b>
                            acquistando i nostri pacchetti.
                            <br />
                            <i>
                                I pacchetti sono validi per 1 anno dall&#39;acquisto, sono legati a una sede
                                d&#39;intervento e non possono essere ceduti o rimborsati. Le chimate d&#39;emergenza e
                                le tariffe orarie del tecnico non sono incluse.
                            </i>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        className="outstanding-img-container"
                        container
                        alignItems="center"
                    >
                        <img className="right" src={Prices1} alt="Economico" />
                    </Grid>
                </Grid>
            </section>

            {/* Cumulative services prices */}
            <section>
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} justify="center" alignItems="center">
                            <img src={Icon18} className="tab-icon" alt="Rete domestica" />
                        </Grid>
                        <Grid item xs={12} md={9} container direction="column">
                            <Typography gutterBottom variant="h6" component="p">
                                Pacchetto basic
                            </Typography>
                            <PriceRow>3 interventi a domicilio</PriceRow>
                            <PriceRow>1 ora assistenza telefonica o remota</PriceRow>
                            <PriceRow price="15%" endSymbol={false}>
                                Risparmio del
                            </PriceRow>
                            <div>
                                <Typography display="inline">
                                    <b>Totale</b>
                                </Typography>
                                :&nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <del>{calcPrice('basicIntero', area)}€</del>
                                </Typography>
                                &nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <b>{calcPrice('basicRidotto', area)}€</b>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon19} className="tab-icon" alt="Rete LAN" />
                        </Grid>
                        <Grid item xs={12} sm={9} container direction="column">
                            <Typography gutterBottom variant="h6" component="p">
                                Pacchetto medium
                            </Typography>
                            <PriceRow>7 interventi a domicilio</PriceRow>
                            <PriceRow>6 ore di assistenza telefonica o remota</PriceRow>
                            <PriceRow price="20%" endSymbol={false}>
                                Risparmio del
                            </PriceRow>
                            <div>
                                <Typography display="inline">
                                    <b>Totale</b>
                                </Typography>
                                :&nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <del>{calcPrice('mediumIntero', area)}€</del>
                                </Typography>
                                &nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <b>{calcPrice('mediumRidotto', area)}€</b>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon20} className="tab-icon" alt="Rete aziendale" />
                        </Grid>
                        <Grid item xs={12} sm={9} container direction="column">
                            <Typography gutterBottom variant="h6" component="p">
                                Pacchetto enterprise
                            </Typography>
                            <PriceRow>10 interventi a domicilio</PriceRow>
                            <PriceRow>10 ore di assistenza telefonica o remota</PriceRow>
                            <PriceRow price="25%" endSymbol={false}>
                                Risparmio del
                            </PriceRow>
                            <div>
                                <Typography display="inline">
                                    <b>Totale</b>
                                </Typography>
                                :&nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <del>{calcPrice('enterpriseIntero', area)}€</del>
                                </Typography>
                                &nbsp;&nbsp;
                                <Typography display="inline" color="primary">
                                    <b>{calcPrice('enterpriseRidotto', area)}€</b>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            {/* Call to action */}
            <section className="no-padding">
                <Grid className="banner" container direction="column" justify="center" alignItems="center">
                    <Typography variant="h6" gutterBottom color="inherit">
                        Richiedi un intervento
                    </Typography>
                    <Typography color="inherit" align="center">
                        Puoi contattarci qui o tramite i 6 canali a disposizione sulla pagina contatti
                    </Typography>
                    <Button variant="outlined" color="inherit" onClick={() => history.push('contatti')}>
                        Contattaci
                    </Button>
                </Grid>
            </section>
        </>
    );
};

export default withRouter(Prices);
