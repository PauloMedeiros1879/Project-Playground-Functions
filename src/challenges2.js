// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  if (tester(arrayNumbers.length) < 0 || tester(arrayNumbers.length) > 9 || arrayNumbers.length > 3){
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let disc = arrayNumbers.slice(0, 2);
    let number1 = arrayNumbers.slice(2, 7);
    let number2 = arrayNumbers.slice(7, 11);
    return '(' + disc.join("") + ') ' + number1.join("") + '-' + number2.join("");
  }  
}
function tester(testes) {
  for (let n = 0; n < testes.length; n += 1){
    if (testes[n] < 0 || testes[n] < 9){
      return -1;
      let counter = 0;
      for (let n2 = 0; n2 < testes.length; n2 += 1){
      if (testes[n2] = 0 === testes[n]){
          counter += 1;
        }
      }
      if (counter >= 3){
        return 3;
      } 
    } 
  }
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
      if (letras === 0 && parseInt(arrayString[frase][0]) >= 0){
        numeroDoses += (arrayString[frase][0])
      }
    }
  }  let number2 = 1;
  for (let cup = 0; cup < numeroDoses.length; cup += 1){
    number2 += parseInt(numeroDoses[cup][0])
    if (number2 > 1 && number2 < 1){
      return number2 + " copos de água";
    } else {
      return "1 copo de água";
    }
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
