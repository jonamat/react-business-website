import { Areas } from './../../types';
type Fields = keyof typeof prezziAreaA;

const common = {
    sulPosto: 30,
    inSede: 25,
    remota: 30,
    telefonica: 30,
};

const prezziAreaA = {
    ...common,
    chiamata: 20,
    chiamataEmergenza: 85,
    chimataNotturna: 185,
    andataRitorno: 25,

    basicIntero: 150,
    basicRidotto: 130,

    mediumIntero: 300,
    mediumRidotto: 240,

    enterpriseIntero: 500,
    enterpriseRidotto: 375,
};

const prezziAreaB = {
    ...common,
    chiamata: 25,
    chiamataEmergenza: 95,
    chimataNotturna: 200,
    andataRitorno: 30,

    basicIntero: 330,
    basicRidotto: 280,

    mediumIntero: 330,
    mediumRidotto: 265,

    enterpriseIntero: 550,
    enterpriseRidotto: 410,
};

const prezziAreaC = {
    ...common,
    chiamata: 30,
    chiamataEmergenza: 105,
    chimataNotturna: 215,
    andataRitorno: 45,

    basicIntero: 180,
    basicRidotto: 150,

    mediumIntero: 360,
    mediumRidotto: 290,

    enterpriseIntero: 600,
    enterpriseRidotto: 450,
};

export const calcPrice = (type: Fields, area: Areas): number => {
    switch (area) {
        case 'A':
            return prezziAreaA[type];
        case 'B':
            return prezziAreaB[type];
        case 'C':
            return prezziAreaC[type];
    }
};
