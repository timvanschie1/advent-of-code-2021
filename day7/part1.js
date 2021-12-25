function part1(data) {
    const lowest = Math.min(...data);
    const highest = Math.max(...data);

    let leastFuelUsed;
    for (let i = lowest; i <= highest; i++) {
        const fuelUsed = data.reduce((currentValue, pos) => currentValue + Math.abs(pos - i), 0);
        if (!leastFuelUsed) {
            leastFuelUsed = fuelUsed;
            continue;
        }

        if (fuelUsed < leastFuelUsed) {
            leastFuelUsed = fuelUsed;
        }
    }

    return leastFuelUsed;
}

module.exports = part1;