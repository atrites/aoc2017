const _ = require('lodash');
const input = require('./input.json').input;

let sum = 0;
for (let x = 0; x < input.length; x++) {
  const a = _.parseInt(input[x]);
  const b = _.parseInt(input[(x + 1) % input.length]);
  if (a === b) {
    sum += a;
  }
}

console.log(sum);
