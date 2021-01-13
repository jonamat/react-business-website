import { ErrorInfo } from 'react';
import { devMode } from '../config';
import ReactGA from 'react-ga';

const reportError = (origin?: string, error?: Error, errorInfo?: ErrorInfo): void => {
    console.error(error);

    if (!devMode) {
        ReactGA.exception({
            description: origin + ' - ' + error?.message + ' - ' + errorInfo?.componentStack,
            fatal: false,
        });
    }
};

export default reportError;
