const numberDrawn = () => {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const raffle = (numberBet, numberDrawn) => {
  console.log(numberBet);
  console.log(numberDrawn);
  if (numberBet === numberDrawn) console.log('Parabéns você ganhou');
  if (numberBet !== numberDrawn) console.log('Tente Novamente');
}

raffle(1, numberDrawn());