import { readFileSync } from 'fs';

const file = readFileSync('./day14.input', 'utf-8');
const input = file.split('\n');

let bitMask: string;
const memory: number[] = [];

for (let i = 0, length = input.length; i < length; i++) {
  const currentAddress = input[i];
  if (currentAddress.startsWith('mask')) {
    bitMask = currentAddress.split(' = ')[1];
    continue;
  }

  const [memAddress, decValue] = currentAddress.split(' = ');
  const address = +memAddress.slice(4, -1);

  const binary = (+decValue >>> 0).toString(2);
  const paddedBinary = '0'.repeat(bitMask.length - binary.length) + binary;
  const maskedBits = paddedBinary
    .split('')
    .map((bit, index) => bitMask[index] === 'X' ? bit : bitMask[index])
    .join('');

  memory[address] = parseInt(maskedBits, 2);
}

console.log(memory.filter(v => v).reduce((sum, number) => sum + number, 0));

setInterval(() => null, 1e6);
