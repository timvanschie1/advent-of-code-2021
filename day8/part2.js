function part2(data) {
    const rawLines = data.split("\n");
    const lines = rawLines.map(line => {
        const [rawSignalPatterns, rawOutputValues] = line.split(" | ");
        return {
            signalPatterns: rawSignalPatterns.split(' ').map(pattern => pattern.split('').sort().join('')),
            outputValues: rawOutputValues.split(' ').map(pattern => pattern.split('').sort().join(''))
        }
    });

    const is1 = pattern => pattern.length === 2;
    const is4 = pattern => pattern.length === 4;
    const is7 = pattern => pattern.length === 3;
    const is8 = pattern => pattern.length === 7;

    function is0 (pattern, digitsToPatterns) {
        const hasCorrectLength = pattern.length === 6;
        const hasAllSignalsOf1 = digitsToPatterns[1].split('').every(signal => pattern.includes(signal));
        const hasAllSignalsOf4 = digitsToPatterns[4].split('').every(signal => pattern.includes(signal));
        return hasCorrectLength && hasAllSignalsOf1 && !hasAllSignalsOf4;
    }

    function is2 (pattern, digitsToPatterns) {
        const hasCorrectLength = pattern.length === 5;
        const hasTwoSignalsOf4 = digitsToPatterns[4].split('').filter(signal => pattern.includes(signal)).length === 2;
        return hasCorrectLength && hasTwoSignalsOf4;
    }

    function is3 (pattern, digitsToPatterns) {
        const hasCorrectLength = pattern.length === 5;
        const hasAllSignalsOf1 = digitsToPatterns[1].split('').every(signal => pattern.includes(signal));
        return hasCorrectLength && hasAllSignalsOf1;
    }

    function is5 (pattern, digitsToPatterns) {
        const hasCorrectLength = pattern.length === 5;
        const hasThreeSignalsOf4 = digitsToPatterns[4].split('').filter(signal => pattern.includes(signal)).length === 3;
        return hasCorrectLength && hasThreeSignalsOf4;
    }

    function is9 (pattern, digitsToPatterns) {
        const hasCorrectLength = pattern.length === 6;
        const hasAllSignalsOf4 = digitsToPatterns[4].split('').every(signal => pattern.includes(signal));
        return hasCorrectLength && hasAllSignalsOf4;
    }

    function is6 (pattern, digitsToPatterns) {
        return Object.entries(digitsToPatterns).every(([_, value]) => value !== pattern);
    }

    function getDigitsToPatterns(signalPatterns) {
        const digitsToPatterns = {};

        // Round 1, get the easy ones:
        signalPatterns.forEach(pattern => {
            if (is1(pattern)) digitsToPatterns[1] = pattern;
            else if (is4(pattern)) digitsToPatterns[4] = pattern;
            else if (is7(pattern)) digitsToPatterns[7] = pattern;
            else if (is8(pattern)) digitsToPatterns[8] = pattern;
        })

        // Round 2:
        signalPatterns.forEach(pattern => {
            if (is0(pattern, digitsToPatterns)) digitsToPatterns[0] = pattern;
            else if (is2(pattern, digitsToPatterns)) digitsToPatterns[2] = pattern;
            else if (is3(pattern, digitsToPatterns)) digitsToPatterns[3] = pattern;
            else if (is5(pattern, digitsToPatterns)) digitsToPatterns[5] = pattern;
            else if (is9(pattern, digitsToPatterns)) digitsToPatterns[9] = pattern;
        })

        // Round 3: find the only missing pattern, which has to be 6:
        digitsToPatterns[6] = signalPatterns.find(pattern => is6(pattern, digitsToPatterns));

        return digitsToPatterns;
    }

    return lines.reduce((currentValue, line) => {
        const digitsToPatterns = getDigitsToPatterns(line.signalPatterns);

        const outputValueAsString = line.outputValues.reduce((currentValue, value) => {
            const digitAsString = Object.keys(digitsToPatterns).find(key => digitsToPatterns[key] === value);
            return currentValue + digitAsString;
        }, '');

        return currentValue + Number(outputValueAsString);
    }, 0);
}

module.exports = part2;