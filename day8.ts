import { readFileSync } from 'fs';

const file = readFileSync('./day8.input', 'utf-8');
const input = file.split('\n').map(string => string.split(' ')) as [string, string][];

const ranIndices = [];
let acc = 0;
let index = 0;
index = 0;
const doInstruction = ([instruction, value] = ['', '']) => {
  switch (instruction) {
  case 'acc': acc += +value;
  case 'nop': {
    const i = ++index;
    if (ranIndices.includes(i)) return console.log(acc);
    ranIndices.push(i);
    return doInstruction(input[i]);
  }
  case 'jmp': {
    const i = index += +value;
    if (ranIndices.includes(i)) return console.log(acc);
    ranIndices.push(i);
    return doInstruction(input[i]);
  }
  }
};

doInstruction(input[index]);

setInterval(() => null, 1e6);
