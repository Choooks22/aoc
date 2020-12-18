import { readFileSync } from 'fs';

const file = readFileSync('./day1.input', 'utf-8');
const input = file.split('\r\n').map(item => +item);

const answers = [];
input.find(item1 => input.find(item2 => {
  if (item1 + item2 === 2020) {
    answers.push(item1, item2);
    return true;
  }
}));
console.log(answers[0] * answers[1]);
