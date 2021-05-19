const wordLengths = require('../src/wordsLength');

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const output = wordLengths(words);
const expected = [3, 6, 10, 5];

describe('Testa a função wordLengths', () => {
  it('A função wordLengths é uma função', () => {
    expect(typeof wordLengths).toBe('function');
  });
  it('A função retorna o número de caracteres das palavras', () => {
    expect(output).toEqual(expected);
  });
});
