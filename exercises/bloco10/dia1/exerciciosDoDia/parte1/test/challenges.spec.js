const functions = require('../src/challenges');

describe('Testa as saídas do Desafio 1', () => {
  it('Testa o retorno true', () => {
    expect(functions.compareTrue(true, true)).toBe(true);
  });
  it('Testa o retorno false', () => {
    expect(functions.compareTrue(true, false)).toBe(false);
  });
});

describe('Testa as saídas do Desafio 2', () => {
  it('Passou no teste', () => {
    expect(functions.calcArea(2, 4)).toBe(4);
  });
});

describe('Testa as saídas do Desafio 3', () => {
  it('Testa o split na frase', () => {
    const phrase = 'Xablau Aehoo Duutz Nice';
    const expected = ['Xablau', 'Aehoo', 'Duutz', 'Nice'];
    expect(functions.splitSentence(phrase)).toEqual(expected);
  });
});

describe('Testa as saídas do Desafio 4', () => {
  it("Retorna 'Paolillo, Lucas'", () => {
    const names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
    expect(functions.concatName(names)).toBe('Paolillo, Lucas');
  });
  it("Retorna 'ré, foguete'", () => {
    const randomNames = ['foguete', 'não', 'tem', 'ré'];
    expect(functions.concatName(randomNames)).toBe('ré, foguete');
  });
  it("Retorna 'captain, captain'", () => {
    const captainName = ['captain', 'my', 'captain'];
    expect(functions.concatName(captainName)).toBe('captain, captain');
  });
});

describe('Testa as saídas do Desafio 5', () => {
  it('Retorna 50 pontos quando o time tenha 14 vitórias e 8 empates', () => {
    expect(functions.footballPoints(14, 8)).toBe(50);
  });
  it('Retorna 5 pontos quando o time tenha 1 vitória e 2 empates', () => {
    expect(functions.footballPoints(1, 2)).toBe(5);
  });
  it('Retorna 0 pontos quando o time tenha 0 vitórias e 0 empates', () => {
    expect(functions.footballPoints(0, 0)).toBe(0);
  });
});

describe('Testa as saídas do Desafio 6', () => {
  it('Retorne 2 quando o parâmetro passado na função seja [9, 1, 2, 3, 9, 5, 7]', () => {
    const array1 = [9, 1, 2, 3, 9, 5, 7];
    expect(functions.highestCount(array1)).toBe(2);
  });
  it('Retorne 1 quando o parâmetro passado na função seja [0, 4, 4, 4, 9, 2, 1]', () => {
    const array2 = [0, 4, 4, 4, 9, 2, 1];
    expect(functions.highestCount(array2)).toBe(1);
  });
  it('Retorne 3 quando o parâmetro passado na função seja [0, 0, 0]', () => {
    const array3 = [0, 0, 0];
    expect(functions.highestCount(array3)).toBe(3);
  });
});

describe('Testa as saídas do Desafio 7', () => {
  it('Retorne cat2, quando cat2 está a 2 unidades e cat1 a 3 unidades do rato', () => {
    expect(functions.catAndMouse(1, 4, 2)).toBe('cat2');
  });
  it('Retorne cat1, quando cat1 está a 6 unidades e cat 2 a 12 unidades do rato', () => {
    expect(functions.catAndMouse(1, 7, 13)).toBe('cat1');
  });
  it("Retorne 'os gatos trombam e o rato foge', quando cat1 e cat2 estão a mesma disntância do rato", () => {
    expect(functions.catAndMouse(1, 5, 5)).toBe(
      'os gatos trombam e o rato foge'
    );
  });
});

describe('Testa as saídas do Desafio 8', () => {
  it("Retorne o array '['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']' quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz", () => {
    const array1 = [2, 15, 7, 9, 45];
    const expected = ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'];
    expect(functions.fizzBuzz(array1)).toEqual(expected);
  });
  it("Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para função fizzBuzz", () => {
    expect(functions.fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']);
  });
  it("Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para função fizzBuzz", () => {
    expect(functions.fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']);
  });
});
