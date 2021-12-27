function part2(data) {
    const heightMap = data.split("\n").map(line => line.split('').map(Number));
    const lowPoints = [];

    function isLowerThan(pointVal, x, y) {
        if (heightMap[y] === undefined || heightMap[y][x] === undefined) return true;
        return pointVal < heightMap[y][x];
    }

    function isHigherThan(x, y, point) {
        if (heightMap[y] === undefined || heightMap[y][x] === undefined) return false;
        return heightMap[y][x] > point;
    }

    heightMap.forEach((line, y) => {
        line.forEach((pointVal, x) => {
            if (
                isLowerThan(pointVal, x - 1, y)
                && isLowerThan(pointVal, x + 1, y)
                && isLowerThan(pointVal, x, y - 1)
                && isLowerThan(pointVal, x, y + 1)
            ) {
                lowPoints.push([pointVal, x, y]);
            }
        })
    })

    const basins = [];

    function conditionalExpansion(mapX, mapY, pointVal, basin) {
        if (heightMap[mapY] && heightMap[mapY][mapX] === 9) return;

        if (isHigherThan(mapX, mapY, pointVal)) {
            const newPoint = [heightMap[mapY][mapX], mapX, mapY];
            const alreadyPresentInBasin = basin.some(point => point.toString() === newPoint.toString());
            if (!alreadyPresentInBasin) {
                addToBasinAndExpand(newPoint, basin);
            }
        }
    }

    function addToBasinAndExpand(point, basin) {
        basin.push(point);
        const [pointVal, pointX, pointY] = point;
        conditionalExpansion(pointX - 1, pointY, pointVal, basin);
        conditionalExpansion(pointX + 1, pointY, pointVal, basin);
        conditionalExpansion(pointX, pointY - 1, pointVal, basin);
        conditionalExpansion(pointX, pointY + 1, pointVal, basin);
    }

    lowPoints.forEach((point, i) => {
        basins.push([]);
        addToBasinAndExpand(point, basins[i]);
    });

    const basinSizes = basins.map(basin => basin.length);
    const sortedBasinSizes = basinSizes.sort((a, b) => b - a);
    return sortedBasinSizes[0] * sortedBasinSizes[1] * sortedBasinSizes[2];
}

module.exports = part2;