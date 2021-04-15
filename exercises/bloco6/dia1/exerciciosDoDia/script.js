const estadosDropDown = document.querySelector('#dropDownEstados');
const estadosBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal*', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function createSelectsOption(array) {
  for (let estado of array) {
    let tempEstado = document.createElement('option');
    tempEstado.innerText = estado;
    estadosDropDown.appendChild(tempEstado);
  }
}

createSelectsOption(estadosBrasil);

function checkDate() {

}