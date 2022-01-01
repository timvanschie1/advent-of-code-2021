function part2(data) {
    const [template, rawPairInsertionRules] = data.split("\n\n");
    const pairInsertionRules = rawPairInsertionRules
        .split("\n")
        .map(rule => rule.split(' -> '))

    let combiCounts = {};
    pairInsertionRules.forEach(([combi]) => {
        combiCounts[combi] = template.split(combi).length - 1;
    });

    const allChars = []
    pairInsertionRules.forEach(([pair]) => allChars.push(pair[0], pair[1]));
    const uniqueChars = [...new Set(allChars)];

    const charCounts = {};
    uniqueChars.forEach(char => charCounts[char] = 0);
    template.split('').forEach(char => charCounts[char]++);

    for (let i = 1; i <= 40; i++) {
        let newCombiCounts = {...combiCounts};

        for (const combi in combiCounts) {
            const oldCombiCount = combiCounts[combi];
            const [_, charToInsert] = pairInsertionRules.find(rule => rule[0] === combi);
            const newCombiOne = combi[0] + charToInsert;
            const newCombiTwo = charToInsert + combi[1];

            newCombiCounts[combi] = newCombiCounts[combi] - oldCombiCount; // Old combi is removed, since a char is inserted between the two current chars and thereby the combi doesn't exist anymore
            newCombiCounts[newCombiOne] = newCombiCounts[newCombiOne] + oldCombiCount;
            newCombiCounts[newCombiTwo] = newCombiCounts[newCombiTwo] + oldCombiCount;

            charCounts[charToInsert] = charCounts[charToInsert] + oldCombiCount;
        }

        combiCounts = {...newCombiCounts};
    }

    let mostOccurrences;
    let leastOccurrences;
    for (const combi in charCounts) {
        const occurrences = charCounts[combi];
        const theMost = !mostOccurrences || occurrences > mostOccurrences;
        const theLeast = !leastOccurrences || occurrences < leastOccurrences;

        if (theMost) {
            mostOccurrences = occurrences;
        }

        if (theLeast) {
            leastOccurrences = occurrences;
        }
    }

    return mostOccurrences - leastOccurrences;
}

module.exports = part2;