import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

// Redux & middlewares
// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';

// Firebase
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// Theming
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from './assets/jss/theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import './assets/scss/style.scss';
// import 'react-toastify/dist/ReactToastify.css';

// Analysis
import ReactGA from 'react-ga';

import { isIE } from 'react-device-detect';
import { devMode, ROOT } from './config';
import ErrorBoundary from './components/ErrorBoundary';
import arrayFindPolyfill from './functions/arrayFindPolyfill';
import App from './App';

const history = createBrowserHistory();

/**
 * Dev checks
 */
if (devMode)
    Object.keys(process.env).forEach((key) => {
        if (!process.env[key]) throw new Error(`Missing required environment var "${key}" in .env`);
    });

/**
 * Polyfills
 */
import 'promise-polyfill/src/polyfill';
if (isIE) arrayFindPolyfill();

/**
 * Google Analytics init
 */
if (!devMode) {
    ReactGA.initialize(process.env.ANALITYCS_ID);
    history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });
}

/**
 * Redux conf
 */
// const rootReducer = combineReducers({
// });
// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

/**
 * Firebase conf
 */
// firebase.initializeApp({
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
// });
// firebase.auth().useDeviceLanguage();

/**
 * Service worker init
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

/**
 * App init
 */
const errorFallback = (
    <div className="error-box">
        <h3>C&#39;è qualcosa che non va!</h3>
        <p>Sembra che il tuo browser non sia compatibile con la tecnologia usata da questo sito.</p>
        <p>
            Prova a ricaricare la pagina. Se ancora non funziona, aggiorna il tuo browser all&#39;ultima versione o
            accedi a internet da un altro software.
        </p>
    </div>
);

ReactDOM.render(
    // <Provider store={store}>
    <ErrorBoundary fallback={errorFallback}>
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <StylesProvider injectFirst>
                    <ParallaxProvider>
                        <CssBaseline />
                        <App />
                    </ParallaxProvider>
                </StylesProvider>
            </ThemeProvider>
        </Router>
    </ErrorBoundary>,
    // </Provider>
    ROOT,
);
