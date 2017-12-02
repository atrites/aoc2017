const _ = require('lodash');
const input = require('./input.json').input;

let sum = 0;
const length = input.length;
const step = length / 2;
console.log({length, step});
for (let x = 0; x < length - 1; x++) {
  const a = _.parseInt(input[x]);
  const b = _.parseInt(input[((x + step) % length)]);
  if (a === b) {
    sum += a;
  }
}

console.log(sum);
