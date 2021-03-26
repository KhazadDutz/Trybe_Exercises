let numbers = [5, 3, 2, 4, 7, 1, 0, 6]
let temp

for (let j = numbers.length; j > 0; j -= 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i + 1]) {
      temp = numbers[i + 1];
      numbers[i + 1] = numbers[i];
      numbers[i] = temp;
    }
  }
}
console.log(numbers);
