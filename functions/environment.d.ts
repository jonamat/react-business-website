declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REPORT_MAIL: string;
            MAILER_HOST: string;
            MAILER_PORT: string;
            MAILER_USER: string;
            MAILER_PASS: string;
        }
    }
}

export {};
