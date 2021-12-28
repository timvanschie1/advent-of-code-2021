const part1 = require('./part1');
const part2 = require('./part2');

const testData = '[({(<(())[]>[[{[]{<()<>>\n' +
    '[(()[<>])]({[<{<<[]>>(\n' +
    '{([(<{}[<>[]}>{[]{[(<()>\n' +
    '(((({<>}<{<{<>}{[]{[]{}\n' +
    '[[<[([]))<([[{}[[()]]]\n' +
    '[{[{({}]{}}([{[{{{}}([]\n' +
    '{<[[]]>}<{[{[{[]{()[[[]\n' +
    '[<(<(<(<{}))><([]([]()\n' +
    '<{([([[(<>()){}]>(<<{{\n' +
    '<{([{{}}[<[[[<>{}]]]>[]]';

test('day 10, part 1', () => expect(part1(testData)).toBe(26397));
test('day 10, part 2', () => expect(part2(testData)).toBe(288957));