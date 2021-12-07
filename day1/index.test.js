const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
]

test('day 1, part 1', () => expect(part1(testData)).toBe(7));
test('day 1, part 2', () => expect(part2(testData)).toBe(5));