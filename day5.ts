import { readFileSync } from 'fs';

const file = readFileSync('./day5.input', 'utf-8');
const input = file.split('\n').map(string => string.replace(/R/g, 'B').replace(/L/g, 'F').split(''));
// const input = ['FBFBBFFRLR'.replace(/R/g, 'B').replace(/L/g, 'F').split('')];

interface Column {
  F: [number, number];
  B: [number, number];
}
const getNextCol = ([low, high]: number[]): Column => ({
  F: [low, Math.floor((low + high) / 2)],
  B: [Math.ceil((high + low) / 2), high]
});

console.log(input.map(ID => {
  let column: Column['F'];
  let row: Column['F'];
  for (let i = 0, length = ID.length - 3; i < length; i++) {
    column = getNextCol(column || [0, 127])[ID[i]];
  }
  for (let i = ID.length - 3, length = ID.length; i < length; i++) {
    row = getNextCol(row || [0, 7])[ID[i]];
  }
  const COLUMN = Math[ID[6] === 'F' ? 'min' : 'max'](...column);
  const ROW = Math[ID[ID.length - 1] === 'F' ? 'min' : 'max'](...row);
  return COLUMN * 8 + ROW;
}).reduce((prev, next) => prev = Math.max(prev, next), 0));

// var F = [0, 63]
// var B = [32, 63]
// var B = [16, 31]
// var F = [16, 23]
// var F =
// var B =
// var B =

setInterval(() => null, 1e6);
