const estadosDropDown = document.querySelector('#dropDownEstados');
const estadosBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal*', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const inputSubmitButton = document.querySelector('#input-submit');
const formDocument = document.querySelector('.inputText');
const body = document.querySelector('body');
const backupPDocs = document.querySelector('.backupDocs');

function createSelectsOption(array) {
  for (let estado of array) {
    let tempEstado = document.createElement('option');
    tempEstado.innerText = estado;
    estadosDropDown.appendChild(tempEstado);
  }
}

createSelectsOption(estadosBrasil);

function preventSubmit(event) {
  event.preventDefault();
}

function createDivAndP() {
  const divOutOfForm = document.createElement('div');
  const pOutOfForm = document.createElement('p');
  pOutOfForm.className = 'backupDocs';
  body.appendChild(divOutOfForm);
  divOutOfForm.appendChild(pOutOfForm);
}

function transferTextToP() {
  let pOutOfForm = document.querySelector('.backupDocs');
  pOutOfForm.innerText = formDocument.value;
}

inputSubmitButton.addEventListener('click', preventSubmit);
inputSubmitButton.addEventListener('click', createDivAndP);
inputSubmitButton.addEventListener('click', transferTextToP);
