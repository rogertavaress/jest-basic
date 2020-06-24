const { subtracao } = require('./functions');


describe('Subtração', () => {
  it('Deve subtrair inteiros', () => {
    expect(subtracao(3,2)).toBe(1);
    expect(subtracao(5,4)).toBe(1);
    expect(subtracao(-1,5)).toBe(-6);
    expect(subtracao(1,-5)).toBe(6);
  });

  it('Deve retornar null se algum parâmetro não for definido/null', () => {
    expect(subtracao(undefined,2)).toBeNull();
    expect(subtracao(1,undefined)).toBeNull();
    expect(subtracao(null,2)).toBeNull();
    expect(subtracao(1,null)).toBeNull();
  });
});