const sum = require('../src/sum');

// implemente seus testes aqui
// 1.A função sum(a, b) retorna a soma do parâmetro a com o b

// // a) Teste se o retorno de sum(4, 5) é 9
describe('Soma os valores', () => {
  it('O retorno de sum(4, 5) é: 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  // // b) Teste se o retorno de sum(0, 0) é 0
  it('O retorno de sum(0, 0) é: 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
});

// // c) Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
describe('lança um erro quando um dos parametros é uma string', () => {
  it('Lança um erro quando um dos parametros é uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(Error);
  });

  // d) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('Verifica a frase de erro: \'parameters must be numbers\'', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
