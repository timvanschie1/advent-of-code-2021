function part1(data) {
    const increasedMeasurements = data.filter((measurement, i) => {
        if (i === 0) return false;
        const prevMeasurement = data[i - 1];
        return Number(measurement) > Number(prevMeasurement);
    })

    return increasedMeasurements.length;
}

module.exports = part1;