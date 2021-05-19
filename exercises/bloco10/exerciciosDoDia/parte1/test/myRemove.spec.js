const myRemove = require('../src/myRemove');

// implemente seus testes aqui
// 2.A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
describe('Verifica se myRemove retorna o array esperado', () => {
  it('Retorna o array esperado: [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // // b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('Não retorna o array esperado: [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // // c) Verifique se o array passado por parâmetro não sofreu alterações
  it('Retorna o xArray sem alterações', () => {
    const xArray = [1, 2, 3, 4];
    expect(myRemove(xArray, 1)).not.toBe(xArray);
  });
  // // d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('Retorna o array sem alterações', () => {
    expect(myRemove([1, 2, 3, 4], 5).toEqual([1, 2, 3, 4]));
  });
});
