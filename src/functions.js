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
    if(a === 0) {
      return 'Indefinido';
    } else {
      return 'Indeterminação Matemática'
    }
  }
  
  return a/b;
}

module.exports = {soma, subtracao, multiplicacao, divisao}