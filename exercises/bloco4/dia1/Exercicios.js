//Exericio 1
let a = 5
let b = 2

let adicao = a + b;

let subtracao = a - b;

let multiplicacao = a * b;

let divisao = a / b;

let mod = a % b;

//Exercicio 2
let a = 25;
let b = 36;

if (a > b) {
  console.log (a)
}else{
  console.log (b)
}

//Exercicio 3
let a = 43;
let b = 30;
let c = 47;

if (a > b && a > c) {
  console.log (a)
}else if (b > a && b > c) {
  console.log (b)
}else{
  console.log (c)
}

//Exercicio 4
let a = 42;

if (a === 0) {
  console.log ('zero');
}else if (a > 0) {
  console.log ('positive')
}else{
  console.log ('negative')
}

//Exercicio 5
let x = 1;
let y = 89;
let z = 90;

if (x <= 0 || y <= 0 || z <= 0){
  console.log (false)
}else if (x + y + z === 180){
  console.log (true)
}else{
  console.log (false)
}
