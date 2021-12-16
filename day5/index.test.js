const part1 = require('./part1');
const part2 = require('./part2');

const testData = '0,9 -> 5,9\n' +
    '8,0 -> 0,8\n' +
    '9,4 -> 3,4\n' +
    '2,2 -> 2,1\n' +
    '7,0 -> 7,4\n' +
    '6,4 -> 2,0\n' +
    '0,9 -> 2,9\n' +
    '3,4 -> 1,4\n' +
    '0,0 -> 8,8\n' +
    '5,5 -> 8,2';

test('day 5, part 1', () => expect(part1(testData)).toBe(5));
test('day 5, part 2', () => expect(part2(testData)).toBe(12));