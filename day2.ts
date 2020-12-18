import { readFileSync } from 'fs';

const file = readFileSync('./day2.input', 'utf-8');
const input = file.split('\r\n').map(item => {
  const [test, string] = item.split(': ');
  const [minmax, letter] = test.split(' ');
  const [min, max] = minmax.split('-');
  const filteredLetters = string.split('').filter(char => char === letter).length;
  return filteredLetters >= +min && filteredLetters <= +max;
}).filter(v => v).length;
console.log(input);

setInterval(() => null, 1e6);
