const greetPeople = require('../src/greetPeople');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

describe('Testa a função greetPeople', () => {
  it('A função greetPeople é uma função', () => {
    expect(typeof greetPeople).toBe('function');
  });
  it("O retorno de greetPeople é: 'Hello Irina', 'Hello Ashleigh', 'Hello Elsa'", () => {
    expect(greetPeople(parameter)).toBe(result);
  });
});
// assert.deepStrictEqual(typeof greetPeople, 'function');
// assert.deepStrictEqual(greetPeople(parameter), result);
