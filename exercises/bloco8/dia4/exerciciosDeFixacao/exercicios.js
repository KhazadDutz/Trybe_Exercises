const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

//Get the highest number in the array:

const numbers = [500, 85, 30, 35, 150];

function getBigger(array) {
  let higherNumber = array[0];
  for (let number of array) {
    if (number > higherNumber) {
      higherNumber = number;
    }
  }
  console.log(higherNumber);
}

getBigger(numbers);

const getBiggerNumber = (accumulator, current) => ((accumulator > current) ? accumulator : current);

const bigger = numbers.reduce(getBiggerNumber);
console.log(bigger);
// Sum all EVEN numbers in the array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function sumEven(array) {
  let sum = 0;
  for (let numbers of array) {
    if (numbers % 2 === 0) {
      sum += numbers;
    }
  }
  return sum;
}

console.log(sumEven(numbers));

const sumAllEven = (accumulator, current) => ((current % 2 === 0) ? current + accumulator : accumulator);

const sumEvenNumber = numbers.reduce(sumAllEven, 0)
console.log(sumEvenNumber);

// Which subject did the student was better:

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getHigherGrade = (accumulator, current) => ((accumulator.nota > current.nota) ? accumulator : current);

const nameGrade = (estudantes) => estudantes.map((student) => ({
  name: student.nome, 
  materia: student.materias.reduce(getHigherGrade).name,
}));

console.log(nameGrade(estudantes));