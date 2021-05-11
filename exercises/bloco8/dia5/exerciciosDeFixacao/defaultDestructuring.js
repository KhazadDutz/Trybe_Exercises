// const personA = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = personA;

// console.log(nationality);

console.log('--------------------');

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x, y, z); // 1

console.log('--------------------');

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

// const {nationality = 'Brazilian'} = person;
person.nationality = 'Brazilian';
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));