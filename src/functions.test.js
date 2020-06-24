const { soma,subtracao,divisao,multiplicacao } = require('./functions');

describe('Soma', () => {
  it('Deve somar inteiros', () => {
    expect(soma(1,2)).toBe(3);
    expect(soma(4,5)).toBe(9);
    expect(soma(-1,5)).toBe(4);
    expect(soma(1,-5)).toBe(-4);
  });

  it('Deve retornar null se algum parâmetro não for definido/null', () => {
    expect(soma(undefined,2)).toBeNull();
    expect(soma(1,undefined)).toBeNull();
    expect(soma(null,2)).toBeNull();
    expect(soma(1,null)).toBeNull();
  });
});