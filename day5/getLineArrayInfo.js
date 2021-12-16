function getLineArrayInfo(rawLineArray) {
    let highestX = 0;
    let highestY = 0;

    const lineArray = [];
    rawLineArray.forEach(rawLine => {
        const [rawFrom, rawTo] = rawLine.split(' -> ');
        const from = rawFrom.split(',').map(string => Number(string));
        const to = rawTo.split(',').map(string => Number(string));
        highestX = Math.max(from[0], to[0], highestX);
        highestY = Math.max(from[1], to[1], highestY);
        lineArray.push({from, to});
    })

    return {
        lineArray,
        highestX,
        highestY
    }
}

module.exports = getLineArrayInfo;