import { Pages } from '../types';

/**
 * Infer Page from location path
 * @param path Path name
 */
const evaluateCurrentLocation = (path: string): Pages => {
    switch (path) {
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

export default evaluateCurrentLocation;
