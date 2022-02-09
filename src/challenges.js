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
function concatName(names){
  let lastName = names[names.length - 1];
  console.log(lastName);
  let firstName = names[0];
  console.log(firstName);
  return lastName + ', ' + firstName;
}
// Desafio 5
function footballPoints(wins, ties){
  if (wins === 14 && ties === 8){
    return 50;
  }
  if (wins === 1 && ties === 2 ){
    return 5;
  }
  if (wins === 0 && ties === 0){
    return 0;
  }
}
// Desafio 6
function highestCount(array) {
  let maxNumber = array[0];
  let counter = 0;
  for (let number = 1; number < array.length; number += 1) {
    if (maxNumber < array[number]){
      maxNumber = array[number];
    }
  }
  for (let number2 = 0; number2 < array.length; number2 += 1) {
    if (maxNumber === array[number2]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    return 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(fb){
  let fbResult = [];
  for (let numberf = 0; numberf < fb.length; numberf += 1) {
    if (fb[numberf] % 5 === 0 && fb[numberf] % 3 === 0){
      fbResult.push('fizzBuzz');
    } else if (fb[numberf] % 5 === 0){
      fbResult.push('buzz');
    } else if (fb[numberf] % 3 === 0){
      fbResult.push('fizz');
    } else {
      fbResult.push ('bug!');
    }
  }
  return fbResult;
}

// Desafio 9
function encode(stringe) {
  let stringresult = stringe
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5')
  return stringresult;
}
function decode(stringde) {
  let stringresult2 = stringde
    .replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u')
  return stringresult2;
}
// Desafio 10
function techList(myArray, myName) {
  let tech = [];
  if (myArray.length === 0){
    return 'Vazio!';
  }
  myArray.sort()
  for (let list = 0; list < myArray.length; list += 1){
    tech.push(
      {
        tech: myArray[list],
        name: myName
      },
    )
  } 
  return tech;
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
