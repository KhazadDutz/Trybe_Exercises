const sumAllNumbers = require('../src/sumAllNumbers');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

test('A função sumAllNumbers é uma função', () => {
  expect(typeof sumAllNumbers).toBe('function');
});

test('O resultado da soma do array é: 53', () => {
  expect(output).toBe(expected);
});
