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

const allLessons = {};
Object.assign(allLessons,{lesson1}, {lesson2}, {lesson3})

// function calculateTotalStudents(object) {
//   console.log(object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes);
// }

// calculateTotalStudents(allLessons)

function calculateTotalStudents(object) {
  let totalStudents = [];
  for (let lessons in object) {
    console.log(lessons);
    lessons.numeroEstudantes;
  }
}
console.log(calculateTotalStudents(allLessons));