// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(8, 4));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function getHighest(numbers) {
  return numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
}

function highestCount(numbers) {
  let count = 0;
  numbers.filter((number) =>
    number === getHighest(numbers) ? (count += 1) : count
  );
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 6, 7], getHighest));

// Desafio 7
function catAndMouse(mousePosition, catOnePosition, catTwoPosition) {
  let distanciaCat1 = Math.abs(catOnePosition - mousePosition);
  let distanciaCat2 = Math.abs(catTwoPosition - mousePosition);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzzElement(number) {
  if (number % 15 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(arr) {
  return arr.map((number) => fizzBuzzElement(number));
}

// Desafio 9
function encodeElement(letter) {
  if (letter === 'a') return '1';
  if (letter === 'e') return '2';
  if (letter === 'i') return '3';
  if (letter === 'o') return '4';
  if (letter === 'u') return '5';
  return letter;
}

function encode(string) {
  let newArray = '';
  for (let letter of string) {
    newArray += encodeElement(letter);
  }
  return newArray;
}

function decodeElement(letter) {
  if (letter === '1') return 'a';
  if (letter === '2') return 'e';
  if (letter === '3') return 'i';
  if (letter === '4') return 'o';
  if (letter === '5') return 'u';
  return letter;
}

function decode(string) {
  let newArray = '';
  for (let letter of string) {
    newArray += decodeElement(letter);
  }
  return newArray;
}

// Desafio 10
function sortObject(element, nome) {
  return { tech: element, name: nome };
}
function techList(array, name) {
  let newObject = [];
  if (array.length === 0) return 'Vazio!';
  for (let element of array.sort()) {
    newObject.push(sortObject(element, name));
  }
  return newObject;
}

// Desafio 11
function areNumbersRepeatedTooMuch(array) {
  for (let numbers of array) {
    let count = 0;
    for (let element of array) {
      if (numbers === element) {
        count += 1;
      }
    }
    if (count >= 3) return true;
  }
  return false;
}

function numbersOutOfRangeExist(array) {
  for (let numbers of array) {
    if (numbers < 0 || numbers > 9) return true;
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (areNumbersRepeatedTooMuch(array) || numbersOutOfRangeExist(array))
    return 'não é possível gerar um número de telefone com esses valores';
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(phoneNumber));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) return true;
  if (lineA < lineC + lineB && lineA > Math.abs(lineB - lineC)) return true;
  if (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA)) return true;
  return false;
}

// Desafio 13
function transformStringToArray(string) {
  return string.split(' ');
}

function transformStringToNumber(array) {
  let newArray = [];
  for (let current of array) {
    newArray.push(parseFloat(current));
  }
  return newArray;
}

function sumNumbers(array) {
  let totalSum = 0;
  for (let number of array) {
    if (number % number === 0) {
      totalSum += number;
    }
  }
  return totalSum;
}

function hydrate(string) {
  let waterCups = sumNumbers(
    transformStringToNumber(transformStringToArray(string))
  );
  if (waterCups === 1) return waterCups + ' copo de água';
  return waterCups + ' copos de água';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
