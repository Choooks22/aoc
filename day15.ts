import { readFileSync } from 'fs';

const file = readFileSync('./day15.input', 'utf-8');
const input = file.split('\n').flatMap(string => string.split(',').map(i => +i));

interface Spoken {
  turn: number;
  number: number;
}

const previousSpoken: Spoken[] = [];

for (let i = 1; i <= 2020; i++) {
  const lastSpoken = input[i - 1] ?? previousSpoken[0].number;
  const repeatSpoken = previousSpoken.filter(spoke => spoke.number === lastSpoken);

  let spokenNow = 0;
  if (repeatSpoken.length > 1) spokenNow = repeatSpoken[0].turn - repeatSpoken[1].turn;

  previousSpoken.unshift({
    turn: i,
    number: input[i - 1] ?? spokenNow
  });
}

console.log(previousSpoken[0]);

setInterval(() => null, 1e6);
