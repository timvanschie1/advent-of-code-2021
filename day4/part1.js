const getSumOfUnmarkedNumbers = require('./getSumOfUnmarkedNumbers');
const markNumberOnCard = require('./markNumberOnCard');
const hasWinningRow = require('./hasWinningRow');
const hasWinningColumn = require('./hasWinningColumn');

function part1(data) {
    const [rawDrawnNumbers, ...rawBingoCards] = data.split("\n\n");

    const bingoCards = rawBingoCards.map(rawCard => {
        const arrayOfRawRows = rawCard.split("\n");
        return arrayOfRawRows.map(rawRow => {
            const trimmedRawRow = rawRow.trim();
            return trimmedRawRow.split(/\ +/);
        });
    });

    let winningCard = null;
    let calledNumberWhenWon = null;

    rawDrawnNumbers.split(',').forEach(drawnNumberString => {
        if (winningCard) return;

        bingoCards.forEach(card => {
            if (winningCard) return;

            markNumberOnCard(card, drawnNumberString);
            if (hasWinningRow(card) || hasWinningColumn(card)) {
                winningCard = card;
                calledNumberWhenWon = Number(drawnNumberString);
            }
        })
    })

    return calledNumberWhenWon * getSumOfUnmarkedNumbers(winningCard);
}

module.exports = part1;