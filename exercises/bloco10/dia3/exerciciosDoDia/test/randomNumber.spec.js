const randomNumber = require('../src/randomNumber');

jest.mock('../src/randomNumber');

test('A função foi chamada 1 vez e tem o retorno de 10', () => {
  randomNumber.mockReturnValue(10);
  randomNumber();

  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
});

describe('Exercicio 2 do conteúdo do dia', () => {
  test('Testa o param1 dividido por param2', () => {
    randomNumber
      .mockImplementationOnce((param1, param2) => param1 / param2)
      .mockReturnValueOnce(4, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
    expect(randomNumber).toHaveBeenCalledTimes(3)
  });
});
