// An unmarked number is a number that is still of type String.
function getSumOfUnmarkedNumbers(card) {
    return card.reduce((prevValue, row) => {
        return prevValue + row.reduce((prevVal, item) => {
            if (typeof item === 'number') return prevVal;
            return prevVal + Number(item);
        }, 0);
    }, 0);
}

module.exports = getSumOfUnmarkedNumbers;