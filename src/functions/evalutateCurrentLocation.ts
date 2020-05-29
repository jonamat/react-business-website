import { Pages } from '../types';

/** Infer Page from location path */
const evalutateCurrentLocation = (pathname: string): Pages => {
    switch (pathname) {
        case '/':
            return Pages.Home;
        case '/servizi':
            return Pages.Services;
        case '/prezzi':
            return Pages.Prices;
        case '/contatti':
            return Pages.Contacts;
        default:
            return Pages.Home;
    }
};

export default evalutateCurrentLocation;
