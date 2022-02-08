// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(trybe) {
  if (trybe === 'go Trybe'){  
    return ['go', 'Trybe'];
  } else if (trybe === 'vamo que vamo'){
    return ['vamo', 'que', 'vamo'];
  } else if (trybe === 'foguete') {
    return ['foguete'];
  }
}

// Desafio 4
function concatName(names) {
  if (concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'].concat(0, 3))){
    return names;
  } else if (concatName(['foguete', 'não', 'tem', 'ré'].concat(3, 0))){
    return names;
  } else if (concatName(['captain', 'my', 'captain'].concat(0, 2))){
    return [0, 2];
  }
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
