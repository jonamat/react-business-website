import { FC, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const ScrollToTop: FC<RouteComponentProps> = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return null;
};

export default withRouter(ScrollToTop);
