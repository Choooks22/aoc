import { readFileSync } from 'fs';

const file = readFileSync('./day9.input', 'utf-8');
const input = file.split('\n').map(i => +i);
(() => {
  for (let i = 0; i < input.length - 25; i++) {
    const current = input[i + 25];
    const preamble = input.slice(i, i + 25);
    if (!preamble.find(item1 => preamble.find(item2 => item1 + item2 === current))) return console.log(current);
  }
})();

setInterval(() => null, 1e6);
