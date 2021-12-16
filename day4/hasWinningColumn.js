function hasWinningColumn(card) {
    let arrayOfColumns = card[0].map(() => []);
    for (let i = 0; i < arrayOfColumns.length; i++) {
        card.forEach(row => {
            arrayOfColumns[i].push(row[i]);
        })
    }

    return arrayOfColumns.reduce((prevValue, column) => {
        return prevValue || column.every(item => typeof item === 'number');
    }, false);
}

module.exports = hasWinningColumn;