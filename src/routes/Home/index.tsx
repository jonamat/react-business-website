import React, { FC } from 'react';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Defer } from 'react-wait-content';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { isSafari, isIE } from 'react-device-detect';

import ContactForm from '../../components/ContactForm';
import setPageMeta from '../../functions/setPageMeta';

// Assets
import Icon1 from '../../assets/img/icon-01.png';
import Icon2 from '../../assets/img/icon-02.png';
import Icon3 from '../../assets/img/icon-03.png';
import Icon4 from '../../assets/img/icon-04.png';
import Icon5 from '../../assets/img/icon-05.png';
import Icon6 from '../../assets/img/icon-06.png';
import Icon7 from '../../assets/img/icon-07.png';
import Home1 from '../../assets/img/img-01.png';
import BannerJPG from '../../assets/img/img-02.jpg';
import BannerWebP from '../../assets/img/img-02.webp';

const Home: FC<RouteComponentProps> = ({ history }) => {
    setPageMeta({
        title: 'Assistenza PC Mantova - Supporto tecnico PC e reti',
        description:
            'Riparazione e assistenza computer desktop e laptop, apparati di rete e server per privati e imprese a domicilio per la provincia di Mantova',
    });

    return (
        <>
            {/* Title */}
            <section className="no-top">
                <Grid container direction="column">
                    <Typography align="center" variant="h4" component="p" gutterBottom>
                        Vicini a te
                    </Typography>
                    <Typography align="center" component="h2">
                        Forniamo assistenza tecnica per computer e reti informatiche a domicilio a privati e imprese per
                        tutto il territorio della provincia di Mantova, con ritiro e consegna dei dispositivi,
                        installazione, configurazione e riparazione sul posto.
                    </Typography>
                </Grid>
            </section>

            {/* Services */}
            <section>
                <Grid container spacing={4}>
                    <Grid item container xs={12} md={4} direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <img src={Icon1} className="main-icon" alt="Riparazione PC a domicilio" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" align="center" gutterBottom>
                                A domicilio
                            </Typography>
                            <Typography align="center">
                                Per installazioni, configurazioni e riparazioni dispositivi e reti sul posto o per
                                ritiro e consegna
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4} direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <img src={Icon2} className="main-icon" alt="Intervento d'emergenza tecnico PC" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" align="center" gutterBottom>
                                Chiamate d&#39;emergenza
                            </Typography>
                            <Typography align="center">
                                Disponibilità immediata anche di notte e festivi per infrastrutture aziendali
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={4} direction="column" alignItems="center" spacing={1}>
                        <Grid item>
                            <img src={Icon3} className="main-icon" alt="Tecnico PC da remoto" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" align="center" gutterBottom>
                                Da remoto
                            </Typography>
                            <Typography align="center">
                                Comodamente da casa con i nostri software di teleassistenza remota
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            {/* Img + description */}
            <section>
                <Grid container justify="space-between" spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        className="outstanding-img-container"
                        container
                        alignItems="center"
                    >
                        <img className="left" src={Home1} alt="Riparazione computer" />
                    </Grid>
                    <Grid item container xs={12} md={7} direction="column" justify="center">
                        <Typography variant="h6" align="left" gutterBottom color="secondary" component="p">
                            Prezzi chiari e senza sorprese
                        </Typography>
                        <Typography variant="h3" align="left" gutterBottom color="primary" component="p">
                            Trasparente
                        </Typography>
                        <Typography align="left">
                            I prezzi delle nostre prestazioni sono chiari e disponibili al pubblico. Offriamo più
                            opzioni di prezzo per eventuali ricambi da sostituire e se vuoi puoi occuparti tu
                            direttamente dell&#39;acquisto degli stessi. I nostri profitti sono esclusivamente sulla
                            prestazione fornita, senza speculare sui componenti forniti.
                        </Typography>
                    </Grid>
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
                                        <Typography variant="h4" align="center" component="h2">
                                            Installazione e configurazione reti per privati e aziende
                                        </Typography>
                                        <Typography variant="h6" align="center" component="h3">
                                            Ottimizzazione bandwidth su reti obsolete, VPN aziendali e configurazioni
                                            ADSL, VoIP e fibra
                                        </Typography>
                                    </Grid>
                                ),
                                amount: 0,
                            },
                        ]}
                    />
                </section>
            </Defer>

            {/* Features */}
            <section>
                <Grid container spacing={4}>
                    <Grid item container xs={12} sm={6} alignItems="center">
                        <Grid item container xs={12} md={6} alignItems="center">
                            <Defer
                                trigger="pageLoaded"
                                fallback={<CircularProgress className="tab-icon" color="secondary" />}
                            >
                                <img src={Icon4} className="tab-icon" alt="Riparazione PC" />
                            </Defer>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className="center-xs" component="p">
                                Alta percentuale di successo
                            </Typography>
                            <Typography className="center-xs">
                                Vantiamo un percentuale di riparazioni eseguite con successo tra il 95% e 100% su base
                                mensile
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={6} alignItems="center">
                        <Grid item container xs={12} md={6} alignItems="center">
                            <Defer
                                trigger="pageLoaded"
                                fallback={<CircularProgress className="tab-icon" color="secondary" />}
                            >
                                <img src={Icon5} className="tab-icon" alt="Riparazione computer portatile" />
                            </Defer>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className="center-xs">
                                Riparazioni su laptop
                            </Typography>
                            <Typography className="center-xs">
                                Offriamo assistenza tecnica anche per riparazioni su computer portatili
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={6} alignItems="center">
                        <Grid item container xs={12} md={6} alignItems="center">
                            <Defer
                                trigger="pageLoaded"
                                fallback={<CircularProgress className="tab-icon" color="secondary" />}
                            >
                                <img src={Icon6} className="tab-icon" alt="Tecnico Linux e Windows server" />
                            </Defer>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className="center-xs" component="p">
                                Servizio completo
                            </Typography>
                            <Typography className="center-xs">
                                Ricopriamo un&#39;ampia gamma di servizi e possiamo operare sulla maggior parte dei
                                sistemi
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={6} alignItems="center">
                        <Grid item container xs={12} md={6} alignItems="center">
                            <Defer
                                trigger="pageLoaded"
                                fallback={<CircularProgress className="tab-icon" color="secondary" />}
                            >
                                <img src={Icon7} className="tab-icon" alt="Tecnico PC veloce" />
                            </Defer>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" className="center-xs" component="p">
                                Comodo
                            </Typography>
                            <Typography className="center-xs">
                                Puoi contattarci tramite 6 canali di comunicazione. Scegli quello con cui ti trovi più a
                                tuo agio!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            {/* Call to action */}
            <section>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h5" component="p" align="center" gutterBottom>
                        Contattaci
                    </Typography>

                    <Typography align="center">
                        Puoi contattarci qui o tramite i 6 canali a disposizione sulla pagina&nbsp;
                        <span onClick={() => history.push('/contatti')} className="link">
                            contatti
                        </span>
                    </Typography>

                    <ContactForm />
                </Grid>
            </section>
        </>
    );
};

export default withRouter(Home);
