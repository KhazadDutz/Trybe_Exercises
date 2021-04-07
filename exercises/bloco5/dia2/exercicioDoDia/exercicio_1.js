// 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
titleH1.id = 'main-title';
let body = document.querySelector('body');
body.appendChild(titleH1);
// 2.Adicione a tag div com a classe main-content como filho da tag body;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
body.appendChild(mainContent);
// 3.Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);
// 4.Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let firstParagraph = document.createElement('p');
firstParagraph.innerText = 'Algum texto';
centerContent.appendChild(firstParagraph);
// 5.Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);
// 6.Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);
// 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
leftContent.appendChild(image);
// 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let unorderedList = document.createElement('ul');
rightContent.appendChild(unorderedList);
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of values) {
  let elementLi = document.createElement('li');
  elementLi.innerText = number;
  unorderedList.appendChild(elementLi);
}
// 9.Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  let tagH3 = document.createElement('h3');
  mainContent.appendChild(tagH3);
}