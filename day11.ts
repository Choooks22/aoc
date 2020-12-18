import { readFileSync } from 'fs';

const file = readFileSync('./day11.input', 'utf-8');
const input = file.split('\n').map(string => string.split(''));

/* eslint-disable */
const getAdjacent = (x: number, y: number) => [
  [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
  [x - 1, y    ], [        ], [x + 1, y    ],
  [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
];
/* eslint-enable */

const arrangeSeats = (seat: string, row: number, column: number): 'L'|'.'|'#' => {
  if (seat === '.') return '.';
  const adjacentsOccupied = getAdjacent(row, column)
    .map(([x, y]) => currRound[y] && currRound[y][x])
    .filter(v => v === '#')
    .length;
  switch(seat) {
  case 'L': return !adjacentsOccupied ? '#' : 'L';
  case '#': return adjacentsOccupied >= 4 ? 'L' : '#';
  }
};

let prevRound: string;
let currRound = input;
do {
  prevRound = JSON.stringify(currRound);
  currRound = (currRound ?? input).map((rows, column) => rows.map((seat, row) => arrangeSeats(seat, row, column)));
} while(JSON.stringify(currRound) !== prevRound);

console.log(currRound.flat().filter(seat => seat === '#').length);

setInterval(() => null, 1e6);
