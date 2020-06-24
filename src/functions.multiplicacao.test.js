const { multiplicacao } = require('./functions');


describe('Multiplicação', () => {
  it('Deve multiplicar inteiros', () => {
    expect(multiplicacao(3,2)).toBe(6);
    expect(multiplicacao(5,4)).toBe(20);
    expect(multiplicacao(-1,5)).toBe(-5);
    expect(multiplicacao(1,-5)).toBe(-5);
  });

  it('Deve retornar null se algum parâmetro não for definido/null', () => {
    expect(multiplicacao(undefined,2)).toBeNull();
    expect(multiplicacao(1,undefined)).toBeNull();
    expect(multiplicacao(null,2)).toBeNull();
    expect(multiplicacao(1,null)).toBeNull();
  });
});