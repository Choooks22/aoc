import { readFileSync } from 'fs';

const file = readFileSync('./day14.input', 'utf-8');
const input = file.split('\n');

const timestamp = +input.shift();
const bus = input
  .shift()
  .split(',')
  .filter(id => id !== 'x')
  .map(id => {
    let time = +id;
    while (time < timestamp) time += +id;
    return { id: +id, minutes: time - timestamp };
  })
  .sort((a, b) => a.minutes - b.minutes)
  .shift();

console.log(bus.id * bus.minutes);

setInterval(() => null, 1e6);
