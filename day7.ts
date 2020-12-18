setInterval(() => null, 1e6);
import { readFileSync } from 'fs';

const file = readFileSync('./day7.input', 'utf-8');
const input = file.replace(/\./g, '').split('\n')
  .map(string => {
    const [bagName, bagItems] = string.split(' contain ');
    const bagList = bagItems.split(', ').map(bag => (bag.endsWith('s') ? bag : bag + 's').split(/ (.*)/)[1]);
    return [bagName, bagList] as [string, string[]];
  })
  .reduce((bagObject, [bagName, bagList]) => ({ ...bagObject, [bagName]: bagList }), {} as Record<string, string[]>);

const recurse = (bagList: string[]) => {
  if (bagList.includes('shiny gold bags')) return true;
  if (bagList.every(bag => bag === 'other bags')) return false;
  return bagList.flatMap(bagItems => recurse(input[bagItems]));
};

const bagList = Object.values(input);
const value = bagList
  .map(recurse)
  .map((result: boolean|boolean[]) => typeof result === 'boolean'
    ? result
    : result.includes(true)
  )
  .filter(v => v)
  .length;

console.log(value);

setInterval(() => null, 1e6);
