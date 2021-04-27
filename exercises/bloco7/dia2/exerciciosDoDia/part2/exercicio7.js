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

function getValueByNumber(object, index) {
  let arrayOfObject = Object.values(object);
  for (let key in arrayOfObject) {
    if (key == index) {
      return arrayOfObject[key];
    }
  }
}

console.log(getValueByNumber(lesson1, 3));
