const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(array, word) {
  for (let current of array) {
    if (current === word) {
      return array.indexOf(current);
    } else {
      return -1;
    }
  }
}

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);