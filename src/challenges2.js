/* eslint-disable space-before-blocks */
// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for (let count = 0; count < 11; count += 1) {
    let semRepetir = arrayNumbers.filter( arrayNumbers => arrayNumbers == count);
    if (semRepetir.length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  let verificNumbers = arrayNumbers.filter( arrayNumbers => arrayNumbers < 0 || arrayNumbers > 9);
  if (verificNumbers.length > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let numbersResult = `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`; 
  return numbersResult;
} 

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
  if (lado1 < lado2 + lado3 && lado1 > Math.abs(lado2 - lado3)) {
    return true;
  } else if (lado2 < lado1 + lado3 && lado2 > Math.abs(lado1 - lado3)){
    return true;
  } else if (lado3 < lado2 + lado1 && lado3 > Math.abs(lado2 - lado1)){
    return true;
  } else{
    return false;
  }
}

// Desafio 13
function hydrate(arrayString) {
  let numeroDoses = ""; 
  for (let frase = 0; frase < arrayString.length; frase += 1){
    for (let letras = 0; letras < arrayString[frase].length ; letras += 1){                 
      if(letras === 0 && parseInt(arrayString[frase][0]) >= 0 ){
        numeroDoses += arrayString[frase][0]
      }
    }
  }  let number2 = 0;
  for (let cup = 0; cup < numeroDoses.length; cup += 1){
    number2 += parseInt(numeroDoses[cup])
  }
  if (number2 === 1){
    return "1 copo de água";
  } else {
    return number2 + " copos de água";    
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
