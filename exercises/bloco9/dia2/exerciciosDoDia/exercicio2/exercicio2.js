function createArray() {
  const randomNumbers = [];
  for (let index = 1; index <= 10; index += 1) {
    randomNumbers.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
  }
  const sum = randomNumbers.reduce((a, b) => a + b);
  return sum;
}

function checkSum(sum) {
  if (sum < 8000) {
    return true;
  }
  return false;
}

function divideSum(func) {
  const sum = func();
  const sumMultiplied = [];
  const multiplyBy = [2, 3, 5, 10];
  for (let number of multiplyBy) {
    sumMultiplied.push(sum * number);
  }
  return sumMultiplied;
};

const sum = () => {
  return new Promise((resolve, reject) => {
    const array = createArray();
    if (checkSum(array)) {
      resolve();
    } else reject();
  });
};

sum()
  .then(() => divideSum(createArray))
    .then(() =>  console.log(divideSum(createArray).reduce((a, b) => a + b)))
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
