const getDecimalFromBinaryArray = require("./getDecimalFromBinaryArray.js");

function part2(data) {
    const positionArray = data[0].split('').map(() => []);

    for (let i = 0; i < data[0].length; i++) {
        data.forEach(binary => {
            positionArray[i] = positionArray[i] + binary[i];
        })
    }

    let oxyGenRating = [...data];
    let co2ScrubRating = [...data];

    positionArray.forEach((position, i) => {
        const nrOfZeros = (position.match(/0/g) || []).length;
        const nrOfOnes = position.length - nrOfZeros;
        const mostCommonValue = nrOfOnes >= nrOfZeros ? '1' : '0';
        const leastCommonValue = nrOfOnes >= nrOfZeros ? '0' : '1';

        if (oxyGenRating.length > 1) {
            oxyGenRating = oxyGenRating.filter(binary => {
                return binary[i] === mostCommonValue;
            });
        }

        if (co2ScrubRating.length > 1) {
            co2ScrubRating = co2ScrubRating.filter(binary => {
                return binary[i] === leastCommonValue;
            });
        }
    });

    console.log(oxyGenRating);

    const oxyGenBinaryArray = oxyGenRating[0].split('').map(bit => Number(bit));
    const co2ScrubRatingArray = co2ScrubRating[0].split('').map(bit => Number(bit));

    console.log({oxyGenBinaryArray});

    return getDecimalFromBinaryArray(oxyGenBinaryArray) * getDecimalFromBinaryArray(co2ScrubRatingArray);
}

module.exports = part2;