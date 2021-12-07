const getDecimalFromBinaryArray = require("./getDecimalFromBinaryArray.js");

function part1(data) {
    const positionArray = data[0].split('').map(() => []);
    const gammaRateArray = [];
    const epsionRateArray = [];

    for (let i = 0; i < data[0].length; i++) {
        data.forEach(binary => {
            positionArray[i] = positionArray[i] + binary[i];
        })
    }

    positionArray.forEach(position => {
        const nrOfZeros = (position.match(/0/g) || []).length;
        const nrOfOnes = position.length - nrOfZeros;
        if (nrOfOnes > nrOfZeros) {
            gammaRateArray.push(1);
            epsionRateArray.push(0);
        } else {
            gammaRateArray.push(0);
            epsionRateArray.push(1);
        }
    });

    return getDecimalFromBinaryArray(gammaRateArray) * getDecimalFromBinaryArray(epsionRateArray);
}

module.exports = part1;