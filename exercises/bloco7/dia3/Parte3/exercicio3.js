const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let current of array) {
    if (current > 10) {
      results.push(current);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(typeof greaterThanTen, 'function');
const output = greaterThanTen(parameter, result);
assert.deepStrictEqual(output, result);