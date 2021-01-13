import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

// Theming
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './assets/jss/theme';
import './assets/scss/style.scss';

// Analysis
import ReactGA from 'react-ga';

// Utils
import { isIE } from 'react-device-detect';
import 'promise-polyfill/src/polyfill';
import { devMode, ROOT } from './config';
import arrayFindPolyfill from './utils/arrayFindPolyfill';
import errorFallback from './utils/errorFallback';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';

const history = createBrowserHistory();

/* -------------------------------------------------------------------------- */
/*                                 Dev checks                                 */
/* -------------------------------------------------------------------------- */

if (devMode)
    Object.keys(process.env).forEach((key) => {
        if (!process.env[key]) throw new Error(`Missing required environment var "${key}" in .env`);
    });

/* -------------------------------------------------------------------------- */
/*                                  Polyfills                                 */
/* -------------------------------------------------------------------------- */

if (isIE) arrayFindPolyfill();

/* -------------------------------------------------------------------------- */
/*                              Google Analytics                              */
/* -------------------------------------------------------------------------- */

if (!devMode) {
    ReactGA.initialize(process.env.ANALYTICS_ID);
    history.listen((location) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });
}

/* -------------------------------------------------------------------------- */
/*                               Service worker                               */
/* -------------------------------------------------------------------------- */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

/* -------------------------------------------------------------------------- */
/*                                   Render                                   */
/* -------------------------------------------------------------------------- */

ReactDOM.render(
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
    ROOT,
);
