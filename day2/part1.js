function part1(data) {
    let horPos = 0;
    let depth = 0;

    data.forEach(instruction => {
        const type = instruction[0];
        const amount = Number(instruction[1]);

        if (type === 'forward') {
            horPos = horPos + amount;
            return;
        }

        if (type === 'down') {
            depth = depth + amount;
            return;
        }

        if (type === 'up') {
            depth = depth - amount;
        }
    })

    return horPos * depth;
}

module.exports = part1;