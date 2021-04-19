const estadosDropDown = document.querySelector('#dropDownEstados');
const estadosBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal*', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const inputSubmitButton = document.querySelector('#input-submit');
const formDocument = document.querySelectorAll('.input');
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

function verifyDate() {
  let dateInput = document.querySelector('#input-data-inicio');
  let days = dateInput.value.substring(0, 2);
  let months = dateInput.value.substring(3, 5);
  let years = dateInput.value.substring(6);
  if (dateInput.value[2] !== '/' || dateInput.value[5] !== '/') alert('Insira a data no formato correto');
  if (parseInt(days) > 31 || parseInt(days) < 0) alert('Insira uma data válido');
  if (parseInt(months) > 12 || parseInt(months) < 0) alert('Insira um mês válida');
  if (parseInt(years) < 0) alert('Insira um ano válido');
}

function preventSubmit(event) {
  event.preventDefault();
}

function createDocumentDiv() {
  const divOutOfForm = document.createElement('div');
  divOutOfForm.className = 'document-backup';
  body.appendChild(divOutOfForm);
}

function transferTextToP() {
  for (let doc of formDocument) {
    let divOutOfForm = document.querySelector('.document-backup');
    let pOutOfForm = document.createElement('p');
    pOutOfForm.className = 'backupDocs';
    pOutOfForm.innerText = doc.value;
    divOutOfForm.appendChild(pOutOfForm);
  }
}

function handleSubmit(event) {
  preventSubmit(event);
  createDocumentDiv();
  transferTextToP();
  verifyDate();
}

inputSubmitButton.addEventListener('click', handleSubmit);
