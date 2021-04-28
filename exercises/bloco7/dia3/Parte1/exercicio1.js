const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// implemente seus testes aqui
// 1.A função sum(a, b) retorna a soma do parâmetro a com o b

// // a) Teste se o retorno de sum(4, 5) é 9
const expectedA = sum(4, 5);
assert.deepStrictEqual(expectedA, 9, '4 + 5 = 9');

// // b) Teste se o retorno de sum(0, 0) é 0
const expectedB = sum(0, 0);
assert.deepStrictEqual(expectedB, 0, '0 + 0 = 0');

// // c) Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => {
    sum(4, '5');
  });
  
  // d) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  assert.deepStrictEqual()
})