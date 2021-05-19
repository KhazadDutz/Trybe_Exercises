const findTheNeedle = require('../src/findNeedle');

// describe('Testa a função findTheNeedle', () => {
//   let words = [];
//   let expected = 0;
//   const output = findTheNeedle(words, 'needle');
//   beforeEach(() => {
//     words = ['house', 'train', 'slide', 'needle', 'book'];
//     expected = 3;
//   })
//   it('O index da palavra needle é: 3', () => {
//     expect(output).toBe(expected);
//   });
// });

describe('Testa a função findTheNeedle', () => {
  const words = ['plant', 'shelf', 'arrow', 'bird'];
  const expected = 0;
  const output = findTheNeedle(words, 'plant');
  it('O index da palavra plant é: 0', () => {
    expect(output).toBe(expected);
  });
});

describe('Testa a função findTheNeedle', () => {
  const words = ['plant', 'shelf', 'arrow', 'bird'];
  const expected = -1;
  const output = findTheNeedle(words, 'plat');
  it('A palavra plat não existe no array', () => {
    expect(output).toBe(-1);
  });
});
