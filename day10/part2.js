function part2(data) {
    const navigationSubSystem = data.split("\n").map(line => line.split(''));

    const isOpener = char => '([{<'.includes(char);

    const openCloseCombis = {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>'
    }

    const allCompletionChars = [];

    navigationSubSystem.forEach((line) => {
        const activeOpenChars = [];
        let isIllegal = false;

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

            isIllegal = true;
            break;
        }

        if (isIllegal) return;

        const completionCharsArray = [];
        activeOpenChars.reverse().forEach(char => {
            completionCharsArray.push(openCloseCombis[char]);
        })
        allCompletionChars.push(completionCharsArray);
    });

    const scoringTable = {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4
    };

    const allCompletionScores =
        allCompletionChars.map(completionChars =>
            completionChars.reduce((currentVal, char) => {
                return currentVal * 5 + scoringTable[char];
            }, 0)
        );

    const allCompletionScoresSorted = allCompletionScores.sort((a, b) => a - b);
    return allCompletionScoresSorted[((allCompletionScores.length - 1) / 2)];
}

module.exports = part2;