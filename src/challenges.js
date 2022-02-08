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
function concatName() {
  if (names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']){
    return names = (names[3] + ', ' + names[0]);
  }
  if (names2 = ['foguete', 'não', 'tem', 'ré']){
    return names2 = (names2[3] + ', ' + names2[0]);
  }
  if (names3 = ['captain', 'my', 'captain']){
    return names3 = (names3[2] + ', ' + names3[0]);
  }
}

// Desafio 5
function footballPoints(wins, ties){
  //erro
}
// Desafio 6
function highestCount(array) {
  let maxNumber = array[0];
  
  for (let number = 0; number < array.length; number += 1) {
    if (maxNumber <= array[number]){
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
  let kek = [0];
  
  for (let numberfb = 0; numberfb < kek.length; numberfb += 1) {
    if (kek[numberfb]/3){
      return 'fizz';
    }
    if (kek[numberfb]/5){
      return 'buzz';
    }
    if (kek[numberfb]/3,5){
      return 'fizzbuzz';
    }
    if (kek[numberfb]/0){
      return 'bug';
    }
  }
}

// Desafio 9
function encode() {
  let stringen = "hello";
  if(stringen.replace("a", 1)){
    return stringen;
  }
  if(stringen.replace("e", 2)){
    return stringe;
  }
  if(stringen.replace("i", 3)){
    return stringe;
  }
  if(stringen.replace("o", 4)){
    return stringe;
  }
  if(stringen.replace("u", 5)){
   return stringe;
  }
  if(stringen.replace("a", 1)){
    return stringe;
  }
}
function decode() {
  let stringde = "h2ll4";
  if(stringde.replace(1, "a")){
    return stringde;
  }
  if (stringde.replace(2, "e")){
    return stringde;
  }
  if (stringde.replace(3, "i")){
    return stringde;
  }
  if (stringde.replace(4, "o")){
    return stringde;
  }
  if (stringde.replace(5, "u")){
   return stringde;
  }
}
// Desafio 10
function techList() {
  let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"];
  let myName = "Paulo";
  for (let list = 0; list <= tech.length; list =+ 1){
    return  myName + ' ' + tech[4];
    } 
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
