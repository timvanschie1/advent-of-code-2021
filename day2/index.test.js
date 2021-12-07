const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    ['forward', '5'],
    ['down', '5'],
    ['forward', '8'],
    ['up', '3'],
    ['down', '8'],
    ['forward', '2'],
];

test('day 2, part 1', () => expect(part1(testData)).toBe(150));
test('day 2, part 2', () => expect(part2(testData)).toBe(900));