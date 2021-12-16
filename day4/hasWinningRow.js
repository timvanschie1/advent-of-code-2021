function hasWinningRow(card) {
    return card.reduce((prevValue, row) => {
        return prevValue || row.every(item => typeof item === 'number');
    }, false);
}

module.exports = hasWinningRow;