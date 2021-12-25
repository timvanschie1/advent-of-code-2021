function getFuelUsed(steps) {
    let fuel = 0;
    for (let i = 1; i <= steps; i++) {
        fuel = fuel + i
    }
    return fuel;
}

function part2(data) {
    const lowest = Math.min(...data);
    const highest = Math.max(...data);

    let leastFuelUsed = null;
    for (let i = lowest; i <= highest; i++) {
        const fuelUsed = data.reduce((currentValue, pos) => currentValue + getFuelUsed(Math.abs(pos - i)), 0);

        if (leastFuelUsed === null) {
            leastFuelUsed = fuelUsed;
            continue;
        }

        if (fuelUsed < leastFuelUsed) {
            leastFuelUsed = fuelUsed;
        }
    }

    return leastFuelUsed;
}

module.exports = part2;