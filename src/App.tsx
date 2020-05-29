import React, { FC, Suspense } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router';
import CookieConsent from 'react-cookie-consent';
import { Pages } from './types';
import evalutateCurrentLocation from './functions/evalutateCurrentLocation';

// Components
import Navbar from './components/Navbar';
import ContentsFrame from './components/ContentsFrame';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Routes
import LoadingPage from './routes/LoadingPage';
// ** Resource prefetching is delegated to the service worker
const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './routes/Home'));
const Services = React.lazy(() => import(/* webpackChunkName: "services" */ './routes/Services'));
const Prices = React.lazy(() => import(/* webpackChunkName: "prices" */ './routes/Prices'));
const Contacts = React.lazy(() => import(/* webpackChunkName: "contacts" */ './routes/Contacts'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ './routes/NotFound'));

const App: FC = () => {
    const history = useHistory();
    const [page, setTabIndex] = React.useState<Pages>(evalutateCurrentLocation(location.pathname));
    const isHomepage = page === Pages.Home;

    const handleTabChange = (_e: React.ChangeEvent<unknown>, value: Pages) => {
        switch (value) {
            case Pages.Home:
                history.push('/');
                break;
            case Pages.Services:
                history.push('/servizi');
                break;
            case Pages.Prices:
                history.push('/prezzi');
                break;
            case Pages.Contacts:
                history.push('/contatti');
                break;
        }

        setTabIndex(value);
    };

    const errorFallback = (
        <div className="error-box">
            <h3>Caricamento non riuscito</h3>
            <p>
                Sembra ci sia stato un errore nel caricamento della pagina. Controlla la tua connesione a internet e
                ricarica la pagina.
            </p>
        </div>
    );

    return (
        <>
            <ScrollToTop />
            <Navbar handleTabChange={handleTabChange} />
            <Header collapse={isHomepage} />

            <ContentsFrame indent={isHomepage}>
                <ErrorBoundary fallback={errorFallback} origin="ContentsFrame">
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/servizi" component={Services} />
                            <Route exact path="/prezzi" component={Prices} />
                            <Route exact path="/contatti" component={Contacts} />
                            <Route exact path="/pagina-non-trovata" component={NotFound} />
                            <Route render={() => <Redirect to="/pagina-non-trovata" />} />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </ContentsFrame>

            <Footer />

            <CookieConsent
                location="bottom"
                buttonText="Ok"
                acceptOnScroll={true}
                acceptOnScrollPercentage={10}
                containerClasses="cookie-banner"
                buttonClasses="button"
                contentClasses="content"
            >
                Questo sito utilizza i cookie di terzi per finalità di analisi del traffico. Continuando la navigazione
                ne acconsenti l&#39;uso.&nbsp;
                <a rel="nofollow" href="/public/privacy-policy.html">
                    Politica sulla privacy
                </a>
                .
            </CookieConsent>
        </>
    );
};

export default App;
