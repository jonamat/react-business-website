import React, { FC, useState, FormEvent, createRef, Suspense } from 'react';
import sendMail from './sendMail';
import { Button, Grid, CircularProgress, Typography } from '@material-ui/core';
import useStyles from './style';
import { Defer } from 'react-wait-content';
import ErrorBoundary from '../ErrorBoundary';
import { devMode } from '../../config';
import reportError from '../../utils/reportError';

const TextField = React.lazy(() => import(/* webpackChunkName: "text-field" */ '@material-ui/core/TextField'));
const ReCAPTCHA = React.lazy(() => import(/* webpackChunkName: "recaptcha" */ 'react-google-recaptcha'));

const ContactForm: FC = () => {
    const classes = useStyles();
    const recaptchaRef = createRef<any>();
    const [sending, setSending] = useState<boolean>(false);
    const [response, setResponse] = useState<string | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const body = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        setResponse(null);
        setSending(true);

        if (!recaptchaRef.current.getValue() || !body.name || !body.email || !body.message) {
            setResponse('Completa tutti i campi richiesti');
            setSending(false);
            return;
        }

        sendMail(body)
            .then(() => setResponse('Messaggio inviato, ti ricontatteremo al più presto'))
            .catch((error) => {
                setResponse(
                    "Errore imprevisto durante l'invio. Riprova o contattaci tramite gli altri canali a disposizione.",
                );

                if (!devMode) reportError('Contact form', error);
            })
            .finally(() => setSending(false));
    };

    const errorFallback = (
        <div className="error-box">
            <h3>Caricamento non riuscito</h3>
            <p>
                Sembra ci sia stato un errore nel caricamento del form. Controlla la tua connesione a internet e
                ricarica la pagina.
            </p>
        </div>
    );

    const fallback = (
        <Grid className={classes.fallback} container alignItems="center" justify="center">
            <CircularProgress color="secondary" />
        </Grid>
    );

    return (
        <ErrorBoundary fallback={errorFallback} origin="Contact form container">
            <Defer render="pageLoaded" delay={2000} fallback={fallback}>
                <Suspense fallback={fallback}>
                    <form className={classes.form} action="#" onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="name"
                            label="Nome"
                            variant="outlined"
                            required
                            disabled={sending}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="email"
                            label="Indirizzo email"
                            variant="outlined"
                            type="email"
                            required
                            disabled={sending}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="message"
                            label="Messaggio"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                            disabled={sending}
                        />
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.RECAPTCHA_KEY}
                            className={classes.recaptcha}
                        />

                        <Button variant="outlined" type="submit" color="primary" disabled={sending}>
                            {sending ? (
                                <Grid container justify="center" alignItems="center">
                                    <CircularProgress size={20} className={classes.iconRow} />
                                    Invio in corso
                                </Grid>
                            ) : (
                                'Invia'
                            )}
                        </Button>

                        {response && (
                            <Typography color="secondary" className={classes.response}>
                                {response}
                            </Typography>
                        )}
                    </form>
                </Suspense>
            </Defer>
        </ErrorBoundary>
    );
};

export default ContactForm;
