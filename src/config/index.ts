export const devMode = process.env.NODE_TARGET !== 'production';
export const ROOT = document.getElementById('root');

export const SCROLLTOP_THRESHOLD = 100;

export const AREAS = {
    a: ['j8ekgy3p', 'y7nm42xp', 'iob5k5aj', 'w9buxotd', 'w5ad6co7', 'nw6oax2s', 'wnzvnb68', 'wi7k9bb6', 'w9btqxk7'],

    b: [
        'iy5q7xkd',
        'wiwo2n2m',
        'w5nrfqzy',
        't8t7z8j7',
        'xo8n35n9',
        'w78hrhyc',
        'm59vjp46',
        'w572mzdw',
        'wx7rwuvo',
        'jjk49azy',
        'ho62yvad',
    ],
    // c: all the other ids
};

export const MAP_STYLE = {
    areaAColor: '#ff8663',
    areaBColor: '#f6c555',
    areaCColor: '#7cb598',
    selectionColor: '#218bb8',
    hoverColor: '#74c7ea',
    strokeColor: '#ffffff',
};

export const FIREBASE_FUNCTION_SEND_MAIL = devMode
    ? 'http://localhost:5001/assistenza-pc-mantova/europe-west1/sendMail'
    : 'https://europe-west1-assistenza-pc-mantova.cloudfunctions.net/sendMail';
