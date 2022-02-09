// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
