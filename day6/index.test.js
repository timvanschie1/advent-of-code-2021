const part1 = require('./part1');
const part2 = require('./part2');

const testData = '3,4,3,1,2';

test('day 6, part 1', () => expect(part1(testData)).toBe(5934));
test('day 6, part 2', () => expect(part2(testData)).toBe(26984457539));