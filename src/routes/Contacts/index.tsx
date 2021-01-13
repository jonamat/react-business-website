import React, { FC } from 'react';
import ReactGA from 'react-ga';
import { Grid, Typography } from '@material-ui/core';

import ContactForm from '../../components/ContactForm';
import setPageMeta from '../../utils/setPageMeta';
import { devMode } from '../../config';

// Assets
import Phone from '../../assets/img/contact-svg-01.svg';
import Email from '../../assets/img/contact-svg-02.svg';
import Whatsapp from '../../assets/img/contact-svg-03.svg';
import Telegram from '../../assets/img/contact-svg-04.svg';
import Messenger from '../../assets/img/contact-svg-05.svg';
import Skype from '../../assets/img/contact-svg-06.svg';

type Contact = 'phone' | 'email' | 'whatsapp' | 'telegram' | 'messenger' | 'skype';

const Contacts: FC = () => {
    setPageMeta({
        title: 'Contattaci - Supporto tecnico e sistemistica Mantova',
        description:
            'Mettiti comodo! Scegli tra 6 canali a disposizione per contattarci: telefono, email, whatsapp, telegram, facebook e skype. Reperibilità 24/7 per emergenze',
    });

    const handleContactClick = (contact: Contact) => {
        if (!devMode) {
            ReactGA.event({
                category: 'Interaction',
                action: 'Click su contatto',
                label: contact,
            });
        }

        switch (contact) {
            case 'phone':
                window.open('tel:' + process.env.PHONE_NUMBER, '_blank');
                break;
            case 'email':
                window.open('mailto:' + process.env.EMAIL, '_blank');
                break;
            case 'whatsapp':
                window.open('https://wa.me/' + process.env.PHONE_NUMBER.slice(1), '_blank');
                break;
            case 'telegram':
                window.open('https://t.me/' + process.env.TELEGRAM_USER, '_blank');
                break;
            case 'messenger':
                window.open('http://m.me/' + process.env.MESSENGER_ID, '_blank');
                break;
            case 'skype':
                window.open('skype:' + process.env.SKYPE_ID + '?chat', '_blank');
                break;
        }
    };

    const humanReadablePhoneNumber = `${process.env.PHONE_NUMBER?.slice(3, 6)} ${process.env.PHONE_NUMBER?.slice(
        6,
        9,
    )} ${process.env.PHONE_NUMBER?.slice(9)}`;

    return (
        <>
            {/* Title */}
            <section className="no-top">
                <Grid container direction="column">
                    <Typography align="center" variant="h4" gutterBottom>
                        Contatti
                    </Typography>
                    <Typography align="center">
                        Mettiti a tuo agio! Puoi contattarci tramite 6 canali messi a disposizione per te
                    </Typography>
                </Grid>
            </section>

            {/* Working hours */}
            <section>
                <Grid container direction="column">
                    <Typography align="center" variant="h6" gutterBottom>
                        Orario di lavoro
                    </Typography>
                    <Typography align="center">
                        Dal <b>lunedì</b> al <b>venerdì</b> dalle <b>9:00</b> alle <b>12:30</b> e dalle <b>15:00</b>{' '}
                        alle <b>19:00</b>
                        <br />
                        <b>Sabato</b> dalle <b>9:00</b> alle <b>12:30</b>
                        <br />
                        <br />
                        Puoi comunque lasciarci un messaggio a qualsiasi orario.
                    </Typography>
                </Grid>
            </section>

            {/* Links */}
            <section>
                <Grid container spacing={4}>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('phone')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Phone className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Telefono</b>
                            </Typography>
                            <Typography className="center-xs">{humanReadablePhoneNumber}</Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('email')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Email className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Email</b>
                            </Typography>
                            <Typography className="center-xs">{process.env.EMAIL}</Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('whatsapp')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Whatsapp className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Whatsapp</b>
                            </Typography>
                            <Typography className="center-xs">{humanReadablePhoneNumber}</Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('telegram')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Telegram className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Telegram</b>
                            </Typography>
                            <Typography className="center-xs">@{process.env.TELEGRAM_USER}</Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('messenger')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Messenger className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Facebook Messenger</b>
                            </Typography>
                            <Typography className="center-xs">{process.env.MESSENGER_USER}</Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        spacing={1}
                        alignItems="center"
                        className="contact-icon"
                        onClick={() => handleContactClick('skype')}
                    >
                        <Grid item container xs={12} md={4} alignItems="center">
                            <Skype className="tab-icon small" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="inherit" className="center-xs" component="h6">
                                <b>Skype</b>
                            </Typography>
                            <Typography className="center-xs">{process.env.SKYPE_USER}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            {/* Contact form */}
            <section>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h5" align="center" gutterBottom>
                        Lascia un messaggio
                    </Typography>

                    <Typography align="center">
                        Puoi contattarci anche dal form qui in basso, ti ricontatteremo al più presto
                    </Typography>

                    <ContactForm />
                </Grid>
            </section>
        </>
    );
};

export default Contacts;
