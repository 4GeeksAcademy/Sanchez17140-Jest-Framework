const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInDollar = valueInYen * 156.1;
    return valueInYen
}

const fromYenToPound = function(valueInPound) {
    let valueInYen = valueInPound * 0.87;
    return valueinPound
}

const sum = (a,b)=> {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar };