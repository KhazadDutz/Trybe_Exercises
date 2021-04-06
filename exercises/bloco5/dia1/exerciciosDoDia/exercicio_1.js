// 1.Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText() {
  document.getElementsByTagName('p')[1].innerText = 'Trabalhando em alguma área especifica de Desenvolvimento Web';
}
changeText();
// 2.Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function yellowSquareToGreen() {
  let firstSquare = document.getElementsByClassName('main-content')[0];
  firstSquare.style.backgroundColor = 'rgb(76,164,109)';
}
yellowSquareToGreen();
// 3.Crie uma função que mude a cor do quadrado vermelho para branco.
function redSquareToWhite() {
  let secondSquare = document.getElementsByClassName('center-content')[0];
  secondSquare.style.backgroundColor = 'white';
}
redSquareToWhite();
// 4.Crie uma função que corrija o texto da tag <h1>.
function correctMainTitle() {
  document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
}
correctMainTitle();
// 5.Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function changePTextToUppercase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase('p');
}
changePTextToUppercase();
// 6.Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphsContent() {
  let paragraphs = document.getElementsByTagName('p');
  for (let paragraph of paragraphs) {
    console.log(paragraph.innerText);  
  }
}
showParagraphsContent();