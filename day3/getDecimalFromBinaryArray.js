function getDecimalFromBinaryArray(arr) {
    let decimal = 0;
    const arrReversed = arr.reverse();

    arrReversed.forEach((bit, i) => {
        decimal = decimal + bit * Math.pow(2, i);
    })

    return decimal;
}

module.exports = getDecimalFromBinaryArray;