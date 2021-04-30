const newRegistration = (nomeCompleto) => {
  let splitName = nomeCompleto.toLowerCase().split(' ');
  let stringOfNameSplit = [];
  for (let name of splitName) {
    if (splitName.indexOf(name) < splitName.length -1) {
      stringOfNameSplit.push(`${name}_`);
    } else if (splitName.indexOf(name) === splitName.length -1) {
      stringOfNameSplit.push(`${name}@`);
    }
  }
  return `${stringOfNameSplit.join('')}trybe.com`;
}

const newEmployees = (func1, func2, func3) => {
  const employees = {
    id1: func1,// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: func2,// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: func3,// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(newRegistration('Pedro Guerra'), newRegistration('Luiza Drumond'), newRegistration('Carla Paiva')));