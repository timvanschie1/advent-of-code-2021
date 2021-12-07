function part2(data) {
    let horPos = 0;
    let depth = 0
    let aim = 0;

    data.forEach(instruction => {
        const type = instruction[0];
        const amount = Number(instruction[1]);

        if (type === 'forward') {
            horPos = horPos + amount;
            depth = depth + (aim * amount);
            return;
        }

        if (type === 'down') {
            aim = aim + amount;
            return;
        }

        if (type === 'up') {
            aim = aim - amount;
        }
    })

    return horPos * depth;
}

module.exports = part2;