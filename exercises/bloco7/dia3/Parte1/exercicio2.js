const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// 2.A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const actualA = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(actualA, [1, 2, 4], 'error');
// b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
const actualB = myRemove([1, 2, 3, 4], 3);
assert.notDeepStrictEqual(actualB, [1, 2, 3, 4]);
// c) Verifique se o array passado por parâmetro não sofreu alterações
const actualC = [1, 2, 3, 4];
myRemove(actualC, 1);
assert.deepStrictEqual(actualC, [1, 2, 3, 4])
// d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])