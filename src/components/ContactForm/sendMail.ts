import { FIREBASE_FUNCTION_SEND_MAIL } from '../../config';

interface Params {
    name: string;
    email: string;
    message: string;
}

const sendMail = async ({ name, email, message }: Params): Promise<void> => {
    if (!name || !email || !message) throw new Error('Bad args');

    const res = await fetch(FIREBASE_FUNCTION_SEND_MAIL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ name, email, message }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (res.status <= 200 && res.status > 300) throw new Error();
};

export default sendMail;
