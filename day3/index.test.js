const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
]

test('day 3, part 1', () => expect(part1(testData)).toBe(198));
test('day 3, part 2', () => expect(part2(testData)).toBe(230));