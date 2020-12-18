import { readFileSync } from 'fs';

const file = readFileSync('./day4.input', 'utf-8');
const input = file.replace(/\r\n/g, '\n').split('\n\n').map(string => string.replace(/\n/g, ' ')); // .map(string => string.split(/\s/g));

const RE = 'byr|iyr|eyr|hgt|hcl|ecl|pid'.split('|').map(item => RegExp(`${item}:`));
const output = input.filter(string => RE.every(re => re.test(string)));
console.log(output.length);

setInterval(() => null, 1e9);
