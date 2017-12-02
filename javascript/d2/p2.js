const _ = require('lodash');
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) { return; }

  const lines = _.split(data, '\n');
  let sum = 0;
  _.each(lines, (line) => {
    const values = _.split(line, '\t');
    let found = false;
    _.each(values, (v1) => {
      if (found) {
        return;
      }
      v1 = _.parseInt(v1);
      _.each(values, (v2) => {
        v2 = _.parseInt(v2);
        if (v1 === v2) {
          return;
        }
        if (v1 % v2 === 0) {
          sum += v1 / v2;
          found = true;
        }
      });
    });
  });

  console.log({sum});
});
