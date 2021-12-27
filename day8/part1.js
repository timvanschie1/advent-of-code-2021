function part1(data) {
    const rawLines = data.split("\n");
    const lines = rawLines.map(line => {
        const [rawSignalPaterns, rawOutputValues] = line.split(" | ");
        return {
            signalPaterns: rawSignalPaterns.split(' '),
            outputValues: rawOutputValues.split(' ')
        }
    });

    // easy = 1, 4, 7, 8
    const nrOfSignalsForEasyDigits = [2, 4, 3, 7];

    return lines.reduce((currentValue, line) => {
        return currentValue + line.outputValues.filter(line => {
            return nrOfSignalsForEasyDigits.includes(line.length);
        }).length
    }, 0);
}

module.exports = part1;