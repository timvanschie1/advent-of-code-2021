function drawLine(diagram, vent, includeDiagonal) {
    const {from: [fromX, fromY], to: [toX, toY]} = vent;
    const isHorizontal = fromY === toY;
    const isVertical = fromX === toX;

    if (isHorizontal) {
        const startPos = Math.min(fromX, toX);
        const endPos = Math.max(fromX, toX);
        for (let i = startPos; i <= endPos; i++) {
            diagram[fromY][i] = diagram[fromY][i] + 1;
        }
        return;
    }

    if (isVertical) {
        const startPos = Math.min(fromY, toY);
        const endPos = Math.max(fromY, toY);
        for (let i = startPos; i <= endPos; i++) {
            diagram[i][fromX] = diagram[i][fromX] + 1;
        }
        return;
    }

    if (includeDiagonal) {
        const xGoesUp = fromX < toX;
        const yGoesUp = fromY < toY;
        let pos = [...vent.from];
        let [x, y] = pos;
        diagram[y][x] = diagram[y][x] + 1;

        while (pos.toString() !== vent.to.toString()) {
            let [x, y] = pos;
            let newX = x + (xGoesUp ? +1 : -1);
            let newY = y + (yGoesUp ? +1 : -1);
            diagram[newY][newX] = diagram[newY][newX] + 1;
            pos = [newX, newY];
        }
    }
}

module.exports = drawLine;