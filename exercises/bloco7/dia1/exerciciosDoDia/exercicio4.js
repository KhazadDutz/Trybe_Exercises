// function longestWord(string) {
//   let split = string.split(' ');
//   let sortedString = split.sort((a, b) => a.length - b.length);
//   let longestWord = sortedString[sortedString.length - 1];
//   return longestWord;
// }


const longestWord = (string) => string.split(' ').sort((a, b) => a.length - b.length).pop();

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
