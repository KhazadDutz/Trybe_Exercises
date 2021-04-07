// 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
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
  tagH3.className = 'description';
  mainContent.appendChild(tagH3);
}
// 10.Adicione a classe title na tag h1 criada;
document.getElementsByTagName('h1')[0].className = 'title';
// 11.Adicione a classe description nas 3 tags h3 criadas;

// 12.Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// 13.Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
// 14.Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// 15.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.