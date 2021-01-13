import React, { FC } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Defer } from 'react-wait-content';
import { isSafari, isIE } from 'react-device-detect';

import setPageMeta from '../../utils/setPageMeta';
import CheckedRow from './CheckedRow';

// Assets
import Icon8 from '../../assets/img/icon-08.png';
import Icon9 from '../../assets/img/icon-09.png';
import Icon10 from '../../assets/img/icon-10.png';
import Icon11 from '../../assets/img/icon-11.png';
import BannerJPG from '../../assets/img/img-03.jpg';
import BannerWebP from '../../assets/img/img-03.webp';

const Services: FC<RouteComponentProps> = ({ history }) => {
    setPageMeta({
        title: "Servizi d'assistenza per PC e reti per Mantova e provincia",
        description:
            "Assistenza, formattazione, configurazione e riparazione computer desktop e laptop, interventi su apparati di rete e server, chiamate a domicilio e d'emergenza",
    });

    return (
        <>
            {/* Title */}
            <section className="no-top">
                <Grid container direction="column">
                    <Typography align="center" variant="h4" gutterBottom>
                        Servizi
                    </Typography>
                    <Typography align="center" variant="subtitle1">
                        Assistenza informatica a tutto tondo. Possiamo operare sulla maggior parte dei sistemi in
                        commercio e fornire supporto per privati e imprese in tempi brevi, garandendo il servizio anche
                        di notte e nei festivi
                    </Typography>
                </Grid>
            </section>

            {/* Full width parallax img */}
            <Defer trigger="pageLoaded">
                <section className="no-padding">
                    <ParallaxBanner
                        className="parallax-banner"
                        layers={[
                            {
                                image: isSafari || isIE ? BannerJPG : BannerWebP,
                                amount: 0.45,
                            },
                            {
                                children: (
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        className="text"
                                    >
                                        <Typography variant="h4" align="center">
                                            Interventi su dispositivi e infrastrutture aziendali
                                        </Typography>
                                        <Typography variant="h6" align="center">
                                            Chiamate di emergenza anche in notturno su linee di produzione continua
                                        </Typography>
                                    </Grid>
                                ),
                                amount: 0,
                            },
                        ]}
                    />
                </section>
            </Defer>

            {/* Services list */}
            <section>
                <Grid container direction="column" spacing={4}>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon8} className="tab-icon" alt="Riparazione computer portatile" />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6" gutterBottom>
                                Riparazione PC desktop e laptop
                            </Typography>
                            <CheckedRow>Riparazione guasti hardware</CheckedRow>
                            <CheckedRow>Sostituzione hardware interno</CheckedRow>
                            <CheckedRow>Sostituzione componenti SMD saldati</CheckedRow>
                            <CheckedRow>Sostituzione porte e connettori</CheckedRow>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon9} className="tab-icon" alt="Assistenza reti e server" />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6" gutterBottom>
                                Reti domestiche e aziendali
                            </Typography>
                            <CheckedRow>Installazione e configurazione reti aziendali e domestiche</CheckedRow>
                            <CheckedRow>Installazione e configurazione dispositivi di rete</CheckedRow>
                            <CheckedRow>Cablaggio infrastrutture di rete</CheckedRow>
                            <CheckedRow>Test e ottimizzazione reti e dispositivi</CheckedRow>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon10} className="tab-icon" alt="Formattazione PC" />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6" gutterBottom>
                                Assistenza software
                            </Typography>
                            <CheckedRow>Formattazione e installazione sistemi operativi</CheckedRow>
                            <CheckedRow>Recupero dati</CheckedRow>
                            <CheckedRow>Assistenza remota via SSH o desktop remoto</CheckedRow>
                            <CheckedRow>Assistenza su firewall, antivirus e altri software</CheckedRow>
                            <CheckedRow>Ottimizzazione prestazioni desktop, laptop e workstation</CheckedRow>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                        <Grid item container xs={12} md={3} alignItems="center">
                            <img src={Icon11} className="tab-icon" alt="Assistenza server" />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h6" gutterBottom>
                                Assistenza server e mainframe
                            </Typography>
                            <CheckedRow>Installazione e configurazione server fisici e virtuali</CheckedRow>
                            <CheckedRow>VPN private aziendali</CheckedRow>
                            <CheckedRow>Configurazioni per infrastrutture multiutenza concorrente</CheckedRow>
                            <CheckedRow>Servizi specifici (CNC remoto, sorveglianza)</CheckedRow>
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
                        Puoi contattarci tramite i 6 canali a disposizione sulla pagina contatti
                    </Typography>
                    <Button variant="outlined" color="inherit" onClick={() => history.push('contatti')}>
                        Contattaci
                    </Button>
                </Grid>
            </section>
        </>
    );
};

export default withRouter(Services);
