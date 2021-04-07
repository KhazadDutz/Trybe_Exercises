let divUm = document.getElementById('divUm');
let divDois = document.getElementById('divDois');
let divTres = document.getElementById('divTres');
let input = document.getElementById('input');
let myWebpage = document.getElementById('mySpotrybefy');


// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
divUm.addEventListener('click', function() {
  divUm.className = 'tech';
  divDois.classList.remove('tech');
  divTres.classList.remove('tech');
});
divDois.addEventListener('click', function() {
  divDois.className = 'tech';
  divUm.classList.remove('tech');
  divTres.classList.remove('tech');
});
divTres.addEventListener('click', function() {
  divTres.className = 'tech';
  divDois.classList.remove('tech');
  divUm.classList.remove('tech');
});
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', function() {
  let container = document.querySelector('.tech');
  container.innerText = input.
})
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', changeH1Color);
myWebpage.addEventListener('mouseleave', backToNormal);
function backToNormal() {
  myWebpage.style.color = 'white';
}
function changeH1Color() {
  myWebpage.style.color = 'red';
}
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.