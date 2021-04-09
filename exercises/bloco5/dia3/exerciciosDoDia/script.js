function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createCalendarDays() {
  let unorderedListOfDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let daysList = document.createElement('li');
    daysList.innerText = days;
    daysList.className = 'days';
    unorderedListOfDays.appendChild(daysList);

    if (days > 23 && days < 26) daysList.className += ' holiday';
    if (days === 31) daysList.className += ' holiday';
    if (days === 4 || days === 11 || days === 18 || days === 25) daysList.className += ' friday';
  }
}
createCalendarDays();
// Exercício 2
let stringFeriado = 'Feriados'
let buttonContainer = document.querySelector('.buttons-container');
function createFeriadosButton(string) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = string;
  buttonContainer.appendChild(button);
};
createFeriadosButton(stringFeriado);
// Exercicio 3
let buttonColor = document.querySelector('#btn-holiday');
buttonColor.addEventListener('click', function() {
  let holidayDayColor = document.querySelectorAll('.holiday');
  for (let day of holidayDayColor) {
    if (day.style.backgroundColor === 'lightblue') {
    day.style.backgroundColor = 'rgb(238, 238, 238)';
    } else {
    day.style.backgroundColor = 'lightblue';
    }
  }
});
// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
let stringSexta = 'Sexta-feira';
function createSextaFeiraButton(string) {
  let sextaButton = document.createElement('button');
  sextaButton.id = 'btn-friday';
  sextaButton.innerHTML = string;
  buttonContainer.appendChild(sextaButton);
}
createSextaFeiraButton(stringSexta);
// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let fridayButton = document.querySelector('#btn-friday');
let sextouDays = document.querySelectorAll('.friday');
let sextouDois = [4, 11, 18, 25];
fridayButton.addEventListener('click', function() {
  for (let day of sextouDays) {
    if (day.innerText === 'Sextou!!!') {
    day.innerText = sextouDois[day];
  } else {
    day.innerText = 'Sextou!!!';
    }
  }
});
// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
let zoomOnDays = document.querySelector('ul .days');
zoomOnDays.addEventListener('mouseover', function(e) {
  if (e.target === zoomOnDays) {
    e.target.style.zoom = '100%';
  }
});
// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 9:
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
// Exercício 10:
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode .