let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for (let key in names){
  console.log('Olá ' + names[key]);
}

let carro = {
  modelo: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (key in carro) {
  console.log(key + ':', carro[key]);
}