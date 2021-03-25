let numbers = [5, 9, 3, 19, 70, 8, 100, 200, 35, 27];

  let maiorNumeroAteAgora = numbers[0]
for (index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumeroAteAgora) {
    maiorNumeroAteAgora = numbers[index]
  }
}
console.log(maiorNumeroAteAgora);