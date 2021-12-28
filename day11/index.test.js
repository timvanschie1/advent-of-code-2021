const part1 = require('./part1');
const part2 = require('./part2');

const testData = '5483143223\n' +
    '2745854711\n' +
    '5264556173\n' +
    '6141336146\n' +
    '6357385478\n' +
    '4167524645\n' +
    '2176841721\n' +
    '6882881134\n' +
    '4846848554\n' +
    '5283751526';

test('day 11, part 1', () => expect(part1(testData)).toBe(1656));
test('day 11, part 2', () => expect(part2(testData)).toBe(195));