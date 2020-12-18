import { readFileSync } from 'fs';

const file = readFileSync('./day12.input', 'utf-8');
const input = file.split('\n');

const dirMap = {
  'N': 0,
  'E': 1,
  'S': 2,
  'W': 3,
  0: 'N',
  1: 'E',
  2: 'S',
  3: 'W'
};

const turnDirection = (degrees: number, rotation: 'L'|'R') => {
  let direction = dirMap[currDirection] + ((degrees / 90) * (rotation === 'R' ? 1 : -1));
  if (direction >= 4) direction %= 4;
  else if (direction < 0) direction += 4;
  currDirection = dirMap[direction];
};

type CardinalDirections = 'N'|'E'|'S'|'W'
let currDirection: CardinalDirections = 'E';
let x = 0, y = 0;

const move = (direction: CardinalDirections, movement: number) => {
  switch (direction) {
  case 'N': return y += movement;
  case 'S': return y -= movement;
  case 'E': return x += movement;
  case 'W': return x -= movement;
  }
};

input.forEach(movement => {
  const [direction, ...numbers] = movement.split('') as ['N'|'S'|'E'|'W'|'L'|'R'|'F', string];
  const moveBy = +numbers.join('');
  switch (direction) {
  case 'L':
  case 'R': return turnDirection(moveBy, direction as 'L'|'R');
  case 'F': return move(currDirection, moveBy);
  default: return move(direction, moveBy);
  }
});

console.log(Math.abs(x) + Math.abs(y));

setInterval(() => null, 1e6);
