const addOne = require('../src/addOne');

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

describe('Testa a função addOne', () => {
  it('A função addOne é uma função', () => {
    expect(typeof addOne).toBe('function');
  });
  it('A função adiciona 1 ao array passado', () => {
    expect(output).toEqual(expected);
  });
  it('A variável myArray é igual a variável unchanged', () => {
    expect(myArray).toEqual(unchanged);
  });
});
