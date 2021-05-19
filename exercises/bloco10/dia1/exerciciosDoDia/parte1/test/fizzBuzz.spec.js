const myFizzBuzz = require('../src/fizzBuzz');

// implemente seus testes aqui
// 4.A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

describe('Testes da função myFizzBuzz', () => {
  it('15 é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('6 é divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('10 é divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  
  it('4 não é divisível por 3, nem por 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it("'a' não é um número", () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});
