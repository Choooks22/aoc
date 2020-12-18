import { readFileSync } from 'fs';

const file = readFileSync('./day6.input', 'utf-8');
const input = file.split('\n\n').map(answers => answers.replace(/\n/g, '').split(''));

console.log(input
  .map(item =>
    item.reduce((yes, inp) => yes.includes(inp) ? yes : [...yes, inp], [] as string[]).length
  )
  .reduce((total, item) => total + item, 0));

setInterval(() => null, 1e6);
