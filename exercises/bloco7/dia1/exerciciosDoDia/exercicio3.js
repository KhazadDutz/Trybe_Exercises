// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   } else if (number > 0) {
//     let fatorial = number * factorial(number - 1);
//     return fatorial;
//   }
// }

const factorial = (number) => (number === 0) ? 1 : number * factorial(number - 1);

console.log(factorial(4));
