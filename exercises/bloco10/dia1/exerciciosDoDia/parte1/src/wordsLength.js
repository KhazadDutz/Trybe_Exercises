function wordLengths(param) {
  let lengthArray = [];
  for (let word of param) {
    lengthArray.push(word.length)
  }
  return lengthArray;
}

module.exports = wordLengths;