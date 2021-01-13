declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';

            ANALITYCS_ID: string;
            RECAPTCHA_KEY: string;

            // Contacts
            PHONE_NUMBER: string;
            EMAIL: string;
            TELEGRAM_USER: string;
            MESSENGER_USER: string;
            MESSENGER_ID: string;
            SKYPE_USER: string;
            SKYPE_ID: string;
            FACEBOOK_PAGE_NAME: string;
            INSTAGRAM_PAGE_NAME: string;
            MISTERIMPRESE_PATH: string;
        }
    }
}

export {};
