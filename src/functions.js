function soma(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a+b;
}
function subtracao(a,b) {
 return 1;
}
function multiplicacao(a,b) {
 return 1;
}
function divisao(a,b) {
 return 1;
}

module.exports = {soma, subtracao, multiplicacao, divisao}