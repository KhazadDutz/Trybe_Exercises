const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function getObjectsSkill(object) {
  let objectArray = Object.keys(object).sort();
  for (let current in objectArray) {
    console.log(`${objectArray[current]}, Nível: ${object[objectArray[current]]}`);
  }
}