const _ = require('lodash');
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) { return; }

  const lines = _.split(data, '\n');
  let sum = 0;
  _.each(lines, (line) => {
    const values = _.split(line, '\t');
    let low = 99999;
    let high = 0;
    _.each(values, (v) => {
      v = _.parseInt(v);
      if (v > high) {
        high = v;
      }
      if (v < low) {
        low = v;
      }
    });
    if (high > 0) {
      sum += high - low;
    }
  });

  console.log({sum});
});
