const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(param) {
  let lengthArray = [];
  for (let word of param) {
    lengthArray.push(word.length)
  }
  return lengthArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];


assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);