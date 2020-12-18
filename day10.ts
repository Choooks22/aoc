import { readFileSync } from 'fs';

const file = readFileSync('./day10.input', 'utf-8');
const input = file.split('\n').map(i => +i);
input.sort((a, b) => a - b);

const differences: Record<string, number> = {};
const minJolt = Math.min(...input);
differences[minJolt] = 1;

input.forEach((jolt, i, array) => {
  const joltageDifference = array[i + 1] - jolt;
  differences[joltageDifference]
    ? differences[joltageDifference]++
    : differences[joltageDifference] = 1;
});

console.log(differences['1'] * (differences['3'] + differences[NaN]));

setInterval(() => null, 1e6);
