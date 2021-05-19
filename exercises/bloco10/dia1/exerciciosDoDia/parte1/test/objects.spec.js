const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  title: 'My Title',
  description: 'My Description',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('Verifica se os objetos são idênticos', () => {
  it('obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
    // this.equals, customMatchers
  });
  it('obj1 não é igual ao obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('obj2 não é igual ao obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
