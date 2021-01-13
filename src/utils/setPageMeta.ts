import { devMode } from './../config/index';

interface Params {
    title: string;
    description: string;
}

/**
 * Define title and description for the current page
 */
const setPageMeta = ({ title, description }: Params): void => {
    if (devMode) {
        if (title.length > 60) {
            console.warn('Page title is too long');
        }

        if (description.length > 160) {
            console.warn('Page description is too long');
        }
    }

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
};

export default setPageMeta;
