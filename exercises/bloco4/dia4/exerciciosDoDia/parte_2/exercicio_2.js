let array = [2, 3, 6, 7, 10, 1];

function indiceDoMaior(listaDeNumeros) {
  let maiorNumero = listaDeNumeros[0]
  for (let index = 1; index < listaDeNumeros.length; index += 1){
    if (listaDeNumeros[index] > maiorNumero) {
      maiorNumero = listaDeNumeros[index]
    }
  }
  return index;
}

console.log(indiceDoMaior(array));
