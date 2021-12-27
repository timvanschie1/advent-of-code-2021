const part1 = require('./part1');
const part2 = require('./part2');

const testData = '2199943210\n' +
    '3987894921\n' +
    '9856789892\n' +
    '8767896789\n' +
    '9899965678';

test('day 9, part 1', () => expect(part1(testData)).toBe(15));
test('day 9, part 2', () => expect(part2(testData)).toBe(1134));