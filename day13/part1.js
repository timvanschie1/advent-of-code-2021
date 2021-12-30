function part1(data) {
    const [rawDotInstructions, rawFoldInstructions] = data.split("\n\n");

    const dotInstructions = rawDotInstructions
        .split("\n")
        .map(instruction => instruction.split(','))
        .map(instruction => instruction.map(part => Number(part)));

    const foldInstructions = rawFoldInstructions
        .split("\n")
        .map(instruction => instruction.split(' '))
        .map(instruction => instruction[instruction.length - 1].split('='))
        .map(instruction => instruction.map((part, i) => i === 0 ? part : Number(part)));

    let highestX = 0;
    let highestY = 0;
    dotInstructions.forEach(([x, y]) => {
        highestX = x > highestX ? x : highestX;
        highestY = y > highestY ? y : highestY;
    })

    const rows = new Array(highestY + 1).fill(null);
    const paperWithDots = rows.map(_ => new Array(highestX + 1).fill('.'));

    for (const [x, y] of dotInstructions) {
        paperWithDots[y][x] = '#';
    }

    const [axis, foldIndex] = foldInstructions[0];
    if (axis === 'y') {
        for (let y = foldIndex + 1; y < paperWithDots.length; y++) {
            const row = paperWithDots[y];
            row.forEach((position, x) => {
                const distanceFromFold = y - foldIndex;
                if (position === '#') paperWithDots[foldIndex - distanceFromFold][x] = '#';
            })
        }
        paperWithDots.splice(foldIndex);
    } else if (axis === 'x') {
        paperWithDots.forEach((row, y) => {
            for (let x = foldIndex + 1; x < paperWithDots[0].length; x++) {
                const position = row[x];
                const distanceFromFold = x - foldIndex;
                if (position === '#') paperWithDots[y][foldIndex - distanceFromFold] = '#';
            }
        })

        paperWithDots.forEach((_, y) => {
            paperWithDots[y].splice(foldIndex);
        })
    }

    let nrOfDots = 0;
    paperWithDots.forEach(row => row.forEach(position => {
        if (position === '#') nrOfDots++
    }))

    return nrOfDots;
}

module.exports = part1;