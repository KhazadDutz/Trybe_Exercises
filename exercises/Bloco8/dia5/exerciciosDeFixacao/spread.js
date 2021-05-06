// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'strawberry', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leiteCondensado', 'granola', 'leiteNinhoEmPo'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));