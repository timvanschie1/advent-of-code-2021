const drawLine = require("./drawLine");
const getAmountOfOverlaps = require("./getAmountOfOverlaps");
const getLineArrayInfo = require("./getLineArrayInfo");

function part2(data) {
    const rawLineArray = data.split("\n");
    const {lineArray, highestX, highestY} = getLineArrayInfo(rawLineArray);

    const diagramRows = new Array(highestY + 1).fill(null);
    const diagram = diagramRows.map(_ => new Array(highestX + 1).fill(0));

    lineArray.forEach(line => {
        drawLine(diagram, line, true);
    })

    return getAmountOfOverlaps(diagram);
}

module.exports = part2;