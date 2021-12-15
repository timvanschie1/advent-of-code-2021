const getDecimalFromBinaryArray = require("./getDecimalFromBinaryArray.js");

function part2(data) {
    function getPositionArrayFromData(data) {
        let positionArray = data[0].split('').map(() => []);

        for (let i = 0; i < data[0].length; i++) {
            data.forEach(binary => {
                positionArray[i] = positionArray[i] + binary[i];
            })
        }

        return positionArray;
    }

    let oxyGenRating = [...data];
    let co2ScrubRating = [...data];

    for (let i = 0; i < data[0].length; i++) {
        if (oxyGenRating.length > 1) {
            let oxyGenRatingPosArray = getPositionArrayFromData(oxyGenRating);
            let nrOfZeros = (oxyGenRatingPosArray[i].match(/0/g) || []).length;
            let nrOfOnes = oxyGenRatingPosArray[i].length - nrOfZeros;
            let mostCommonValue = nrOfOnes >= nrOfZeros ? '1' : '0';

            oxyGenRating = oxyGenRating.filter(binary => {
                return binary[i] === mostCommonValue;
            });
        }

        if (co2ScrubRating.length > 1) {
            let co2ScrubRatingPosArray = getPositionArrayFromData(co2ScrubRating);
            let nrOfZeros = (co2ScrubRatingPosArray[i].match(/0/g) || []).length;
            let nrOfOnes = co2ScrubRatingPosArray[i].length - nrOfZeros;
            let leastCommonValue = nrOfOnes >= nrOfZeros ? '0' : '1';

            co2ScrubRating = co2ScrubRating.filter(binary => {
                return binary[i] === leastCommonValue;
            });
        }
    }

    const oxyGenBinaryArray = oxyGenRating[0].split('').map(bit => Number(bit));
    const co2ScrubRatingArray = co2ScrubRating[0].split('').map(bit => Number(bit));

    return getDecimalFromBinaryArray(oxyGenBinaryArray) * getDecimalFromBinaryArray(co2ScrubRatingArray);
}

module.exports = part2;