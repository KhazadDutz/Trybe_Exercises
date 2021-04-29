const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function verifyPair(object, keyName, keyValue) {
  let arrayObject = Object.entries(object);
  for (let key in arrayObject) {
    if (arrayObject[key][0] === keyName && arrayObject[key][1] === keyValue) { 
      return 'true';
    }
  }
  return 'false'
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false,