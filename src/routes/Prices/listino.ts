import { Areas } from './../../types';
type Fields = keyof typeof prezziAreaA;

const common = {
    sulPosto: 35,
    inSede: 25,
    remota: 30,
    telefonica: 30,
};

const prezziAreaA = {
    ...common,
    chiamata: 20,
    chiamataEmergenza: 85,
    chimataNotturna: 185,
    andataRitorno: 30,

    basicIntero: 80,
    basicRidotto: 70,

    mediumIntero: 220,
    mediumRidotto: 175,

    enterpriseIntero: 500,
    enterpriseRidotto: 375,
};

const prezziAreaB = {
    ...common,
    chiamata: 25,
    chiamataEmergenza: 95,
    chimataNotturna: 200,
    andataRitorno: 35,

    basicIntero: 95,
    basicRidotto: 80,

    mediumIntero: 255,
    mediumRidotto: 205,

    enterpriseIntero: 575,
    enterpriseRidotto: 430,
};

const prezziAreaC = {
    ...common,
    chiamata: 30,
    chiamataEmergenza: 105,
    chimataNotturna: 215,
    andataRitorno: 45,

    basicIntero: 110,
    basicRidotto: 90,

    mediumIntero: 290,
    mediumRidotto: 230,

    enterpriseIntero: 650,
    enterpriseRidotto: 490,
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
