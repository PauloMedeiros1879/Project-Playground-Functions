// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  if (Math.max(...arrayNumbers) > 9 || Math.min(...arrayNumbers) < 0){
    return 'Não é possível gerar um número de telefone com esses valores';
  }
  for(let number of arrayNumbers) {
    let count = 0;
    for (let number1 of arrayNumbers) {
      if (number1 === number) {
        count += 1;
      }
    }
    if(count > 2) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumber = '';
  for (let n = 0; n < arrayNumbers; n += 1){
    if (n === 0){
      phoneNumber += '(';
      phoneNumber += arrayNumbers[n];
    } else if (n === 1) {
      phoneNumber += arrayNumbers[n];
      phoneNumber += ')';
    } else if (n === 6) {
      phoneNumber += arrayNumbers[n];
      phoneNumber += '-';
    } else{
      phoneNumber += arrayNumbers[n];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
  if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1) {
    return false;
  }
}

// Desafio 13
function hydrate(arrayString) {
  let numeroDoses = 0; 
  for (let frase = 0; frase < arrayString.length; frase += 1){
    for (let letras = 0; letras < arrayString[frase].length ; letras += 1){                 
      if (letras === 0){
        numeroDoses += (arrayString[frase][0])
      }
    }     
  }
  let number2 = 0;
  for (let cup = 0; cup < numeroDoses.length; cup += 1){
    number2 += parseInt(numeroDoses[cup][0])
  
  if (number2 < 1 ){
    return number2 + " copos de água"
  } else {
    return  "1 copo de água"   
  }
 }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
