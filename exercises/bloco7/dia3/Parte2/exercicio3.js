const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(array) {
  return array.reduce((a, b) => a + b, 0);
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);