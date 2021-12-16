function getAmountOfOverlaps(diagram) {
    let overlaps = 0;
    diagram.forEach(row => {
        row.forEach(point => {
            if (point >= 2) {
                overlaps = overlaps + 1;
            }
        })
    })
    return overlaps;
}

module.exports = getAmountOfOverlaps;