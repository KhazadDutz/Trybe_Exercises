const newRegistration = (nomeCompleto) => {
  let splitName = nomeCompleto.toLowerCase().split(' ');
  let stringOfNameSplit = [];
  const employee = {};
  for (let name of splitName) {
    if (splitName.indexOf(name) < splitName.length -1) {
      stringOfNameSplit.push(`${name}_`);
    } else if (splitName.indexOf(name) === splitName.length -1) {
      stringOfNameSplit.push(`${name}@`);
    }
  }
  employee['Nome'] = nomeCompleto;
  employee['Email'] = `${stringOfNameSplit.join('')}trybe.com`;
  return employee;
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: func('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: func('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(newRegistration));