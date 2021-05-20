const upperCase = require('../src/upperCase');

test('Todos os caracteres transformaram em maiúsculas', (done) => {
  const phrase = 'xablau, aehooo';
  upperCase(phrase, (result) => {
    expect(result).toEqual('XABLAU, AEHOOO');
  });
  done();
});
