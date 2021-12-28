function part1(data) {
    const navigationSubSystem = data.split("\n").map(line => line.split(''));

    const isOpener = char => '([{<'.includes(char);

    const openCloseCombis = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }

    const firstIllegalChars = [];

    navigationSubSystem.forEach(line => {
        let activeOpenChars = [];

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (isOpener(char)) {
                activeOpenChars.push(char);
                continue;
            }

            const lastOpenChar = activeOpenChars[activeOpenChars.length - 1];
            if (char === openCloseCombis[lastOpenChar]) {
                activeOpenChars.pop();
                continue;
            }

            firstIllegalChars.push(char);
            break;
        }
    });

    const scoringTable = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137
    };

    return firstIllegalChars.reduce((currentVal, char) => currentVal + scoringTable[char], 0);
}

module.exports = part1;