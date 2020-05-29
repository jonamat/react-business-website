import { Component, ErrorInfo } from 'react';
import reportError from '../../functions/reportError';

interface Props {
    fallback?: JSX.Element;
    onError?: () => any;
    redirectTo?: string;
    origin?: string;
}

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
    state = { hasError: false };

    public static getDerivedStateFromError() {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        reportError(this.props.origin || 'Boudary', error, errorInfo);
        if (this.props.onError) this.props.onError();
        if (this.props.redirectTo) location.href = this.props.redirectTo;
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || null;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
