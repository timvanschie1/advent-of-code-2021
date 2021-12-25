const part1 = require('./part1');
const part2 = require('./part2');

const testData = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

test('day 7, part 1', () => expect(part1(testData)).toBe(37));
test('day 7, part 2', () => expect(part2(testData)).toBe(168));