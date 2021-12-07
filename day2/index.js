const fs = require('fs');
const puzzleInputStrings = fs.readFileSync('input.txt').toString().split("\n");
const puzzleInput = puzzleInputStrings.map(string => string.split(" "));

const part1 = require('./part1');
const part2 = require('./part2');

console.log('day 2, part 1 answer:', part1(puzzleInput));
console.log('day 2, part 2 answer:', part2(puzzleInput));