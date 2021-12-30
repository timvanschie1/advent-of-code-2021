const part1 = require('./part1');
const part2 = require('./part2');

const testData = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

test('day 14, part 1', () => expect(part1(testData)).toBe(1588));
test('day 14, part 2', () => expect(part2(testData)).toBe(2188189693529));