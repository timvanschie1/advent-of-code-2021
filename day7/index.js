const fs = require('fs');
const puzzleInput = fs.readFileSync('input.txt').toString().split(',');

const part1 = require('./part1');
const part2 = require('./part2');

console.log('day 7, part 1 answer:', part1(puzzleInput));
console.log('day 7, part 2 answer:', part2(puzzleInput));