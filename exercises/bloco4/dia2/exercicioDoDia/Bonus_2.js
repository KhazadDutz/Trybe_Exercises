let numbers = [5, 3, 2, 4, 7, 1, 0, 6]
let temp

for (let j = 0; j < numbers.length; j += 1) {
  for (let i = numbers.length; i > 0; i -= 1) {
    if (numbers[i] > numbers[i - 1]){
      temp = numbers [i];
      numbers[i] = numbers[i - 1];
      numbers[i -1] = temp;
    }
  }
}
console.log(numbers);

