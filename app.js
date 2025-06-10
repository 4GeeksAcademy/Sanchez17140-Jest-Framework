const sum = (a, b) => a + b;

const fromEuroToDollar = (euro) => euro * 1.07;

const fromDollarToYen = (dollar) => dollar * 156.5;

const fromYenToPound = (yen) => yen * 0.87;

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}