function part2(data) {
    const [template, rawPairInsertionRules] = data.split("\n\n");
    const pairInsertionRules = rawPairInsertionRules
        .split("\n")
        .map(rule => rule.split(' -> '))

    let polymer = template;
    for (let i = 1; i <= 10; i++) {
        for (const [pair, insertion] of pairInsertionRules) {
            const insertionRuleRegex = new RegExp(pair, "g");
            polymer = polymer.replace(insertionRuleRegex, pair[0] + insertion.toLowerCase() + pair[1]); // Temp use lowercase for insertion, so it's ignored during this step.
        }

        polymer = polymer.toUpperCase();
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

    console.log(polymer);
    return mostOccurences - leastOccurences;
}

module.exports = part2;