const { divisao } = require('../functions');

describe('Divisão', () => {
  it('Deve dividir inteiros', () => {
    expect(divisao(3,2)).toEqual(1.5);
    expect(divisao(10,-1)).toEqual(-10);
    expect(divisao(-10,-5)).toEqual(2);
    expect(divisao(1,-2)).toEqual(-0.5);
  });

  it('Deve retornar null se algum parâmetro não for definido/null', () => {
    expect(divisao(undefined,2)).toBeNull();
    expect(divisao(1,undefined)).toBeNull();
    expect(divisao(null,2)).toBeNull();
    expect(divisao(1,null)).toBeNull();
  });

  it('Deve retornar null se o parametro "b" for zero', () => {
    expect(divisao(1,0)).toBeNull();
  });
});