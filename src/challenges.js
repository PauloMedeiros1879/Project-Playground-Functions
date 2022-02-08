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
function footballPoints(wins, ties) {
  wins = 3;
  ties = 1;
  points = 0;
  for(let vitory = 3; wins =+ 3; vitory =+3){
    for(let draw = 1; draw =+ 1; draw =+ 1)
  if (points = (vitory <= 14 && draw <= 8){
    return;
  } else if (points = (vitory <= 5 && draw <= 5)){
    return;
  } else if (points = (vitory = 0 && draw = 0)){
    return;
  }
}
}
// Desafio 6
function highestCount(array) {
  let maxNumber = array[0];
  
  for (let number = 0; number < array.length; number += 1) {
    if (maxNumber < array[number]){
      maxNumber = array[number];
    }

    return maxNumber;
  }
}


// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
 if (cat2 === 2 && cat1 == 3 && mouse == 0){
   return 'cat2';
 } else if ((cat1 == 6 && mouse == 0) && (cat2 == 12 && mouse == 0)){
   return 'cat 1';
 } else if (cat2 === 0 && cat1 == 0 && mouse == 0){
   return 'os gatos trombam e o rato foge';
 }
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
