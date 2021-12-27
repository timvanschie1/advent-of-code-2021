function part1(data) {
    const heightMap = data.split("\n").map(line => line.split('').map(Number));
    const lowPoints = [];

    function isLowerThan(point, heightMap, x, y) {
        if (heightMap[y] === undefined || heightMap[y][x] === undefined) return true;
        return point < heightMap[y][x];
    }

    heightMap.forEach((line, y) => {
        line.forEach((point, x) => {
            if (
                isLowerThan(point, heightMap, x - 1, y)
                && isLowerThan(point, heightMap, x + 1, y)
                && isLowerThan(point, heightMap, x, y - 1)
                && isLowerThan(point, heightMap, x, y + 1)
            ) {
                lowPoints.push(point);
            }
        })
    })

    return lowPoints.reduce((currentValue, point) => currentValue + point + 1, 0);
}

module.exports = part1;