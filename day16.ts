import { readFileSync } from 'fs';

const file = readFileSync('./day16.input', 'utf-8');
const input = file.split('\n').filter(v => v);

const split = input.findIndex(string => string === 'nearby tickets:');
const checks = input.splice(0, split + 1).slice(0, split - 2);

const validNumbers = checks
  .flatMap(check => [...check.matchAll(/\d+-\d+/g)]
    .flatMap(i => {
      const array: string[] = [];
      const [min, max] = i[0].split('-');
      for (let current = +min; current <= +max;) array.push('' + current++);
      return array;
    })
  )
  .filter((value, index, array) => array.indexOf(value) === index);

const answer = input
  .flatMap(string => string.split(','))
  .filter(value => !validNumbers.includes(value))
  .reduce((sum, value) => sum + +value, 0);

console.log(answer);

setInterval(() => null, 1e6);
