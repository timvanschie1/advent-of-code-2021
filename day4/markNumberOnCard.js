// A number is marked by making it type Number instead of String.
function markNumberOnCard(card, drawnNumberString) {
    card.forEach(row => {
        row.forEach((numberString, i) => {
            if (numberString === drawnNumberString) {
                row[i] = Number(numberString);
            }
        })
    })
}

module.exports = markNumberOnCard;