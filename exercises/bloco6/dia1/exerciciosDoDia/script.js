const estadosDropDown = document.querySelector('#dropDownEstados');
const estadosBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal*', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const inputSubmitButton = document.querySelector('#input-submit');
const formDocument = document.querySelectorAll('.inputText');
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
  pOutOfForm.className = 'backupDocs';
  body.appendChild(divOutOfForm);
}

function transferTextToP() {
  let pOutOfForm = document.querySelector('.backupDocs');
  for (let doc of formDocument) {
    let pOutOfForm = document.createElement('p');
    pOutOfForm.innerText = formDocument.value;
    divOutOfForm.appendChild(pOutOfForm);
  }
}

function handleSubmit(event) {
  preventSubmit(event);
  createDivAndP();
  transferTextToP();
}

inputSubmitButton.addEventListener('click', handleSubmit);
