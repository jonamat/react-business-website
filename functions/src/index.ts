import { MAILER_CONFIG, REPORT_MAIL } from './keys';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

if (process.env.FUNCTIONS_EMULATOR) {
    // const serviceAccountKey = require('../GAC_key.json')
    admin
        .initializeApp
        // {
        //     credential: admin.credential.cert(serviceAccountKey),
        //     databaseURL: process.env.DATABASE_URL
        // }
        ();
} else admin.initializeApp();

exports.sendMail = functions.region('europe-west1').https.onRequest(async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://assistenza-pc-mantova.it');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Max-Age', '0');
        return res.sendStatus(200);
    }

    try {
        if (req.method !== 'POST') return res.status(400).send('Only POST requests are accepted');

        const { name, email, message } = req.body;
        if (!name || !email || !message) return res.status(400).send('Incomplete informations provided');

        const transporter = nodemailer.createTransport(MAILER_CONFIG);
        const mailOptions = {
            from: 'Assistenza PC Mantova <noreply@assistenza-pc-mantova.it>',
            to: REPORT_MAIL,
            subject: `Nuovo incarico da parte di ${name}`,
            html: `<p><strong>Data d'invio:</strong> ${new Date().toLocaleDateString('it-IT', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            })}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});
