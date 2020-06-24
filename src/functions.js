function soma(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a+b;
}
function subtracao(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a-b;
}
function multiplicacao(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a*b;
}
function divisao(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  if(b === 0) {
    return null;
  }
  
  return a/b;
}

module.exports = {soma, subtracao, multiplicacao, divisao}