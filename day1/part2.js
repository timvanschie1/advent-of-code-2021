function part2(data) {
    data = data.map(item => Number(item));

    const increasedWindows = data.filter((measurement, i) => {
        if (i === 0) return false;
        if (data[i + 2] === undefined) return false;
        const currentWindow = data[i] + data[i + 1] + data[i + 2];
        const prevWindow = data[i - 1] + data[i] + data[i + 1];
        return currentWindow > prevWindow;
    })

    return increasedWindows.length;
}

module.exports = part2;