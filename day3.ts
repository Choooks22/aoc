import { readFileSync } from 'fs';

const file = readFileSync('./day3.input', 'utf-8');
const input = file.split('\r\n').map(string => string.split(''));
console.log(input.map((string, i) => string[i * 3 % string.length]).filter(coord => coord === '#').length);
// console.log(input.map((_, i) => i * 3 % _.length));

setInterval(() => null, 1e6);
