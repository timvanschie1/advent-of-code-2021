const getSumOfUnmarkedNumbers = require('./getSumOfUnmarkedNumbers');
const markNumberOnCard = require('./markNumberOnCard');
const hasWinningRow = require('./hasWinningRow');
const hasWinningColumn = require('./hasWinningColumn');

function part2(data) {
    const [rawDrawnNumbers, ...rawBingoCards] = data.split("\n\n");

    const bingoCards = rawBingoCards.map(rawCard => {
        const arrayOfRawRows = rawCard.split("\n");
        return arrayOfRawRows.map(rawRow => {
            const trimmedRawRow = rawRow.trim();
            return trimmedRawRow.split(/\ +/);
        });
    });

    const notWonBingoCards = [...bingoCards];

    let lastWinningCard = null;
    let calledNumberWhenWon = null;

    rawDrawnNumbers.split(',').forEach(drawnNumberString => {
        if (lastWinningCard) return;

        bingoCards.forEach((card, i) => {
            if (lastWinningCard) return;

            markNumberOnCard(card, drawnNumberString);
            if (hasWinningRow(card) || hasWinningColumn(card)) {
                notWonBingoCards[i] = null;
                if (notWonBingoCards.every(item => item === null)) {
                    lastWinningCard = card;
                    calledNumberWhenWon = Number(drawnNumberString);
                }
            }
        })
    })

    return calledNumberWhenWon * getSumOfUnmarkedNumbers(lastWinningCard);
}

module.exports = part2;