function part1(data) {
    const [template, rawPairInsertionRules] = data.split("\n\n");
    const pairInsertionRules = rawPairInsertionRules
        .split("\n")
        .map(rule => rule.split(' -> '))

    let polymer = template;
    for (let i = 1; i <= 10; i++) {
        let newPolymer = '';

        for (let i = 0; i < polymer.length - 1; i++) {
            const twoPolymerChars = polymer[i] + polymer[i + 1];
            const pairInsertionRule = pairInsertionRules.find(rule => twoPolymerChars === rule[0])

            if (i > 0) {
                newPolymer = newPolymer.slice(0, -1); // cut off last char, since we will add it below and we don't want duplicates
            }

            if (pairInsertionRule) {
                const charToInsert = pairInsertionRule[1];
                newPolymer = newPolymer + polymer[i] + charToInsert + polymer[i + 1];
            } else {
                newPolymer = newPolymer + twoPolymerChars;
            }
        }

        polymer = newPolymer;
    }

    let mostOccurences;
    let leastOccurences;

    const uniqueChars = [...new Set(polymer.split(''))];
    for (const char of uniqueChars) {
        const occurences = polymer.split(char).length - 1;
        const mostOccurrences = mostOccurences && occurences > mostOccurences;
        const leastOccurrences = leastOccurences && occurences < leastOccurences;

        if (!mostOccurences || mostOccurrences) {
            mostOccurences = occurences;
            continue;
        }

        if (!leastOccurences || leastOccurrences) {
            leastOccurences = occurences;
        }
    }

    return mostOccurences - leastOccurences;
}

module.exports = part1;