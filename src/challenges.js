// Desafio 1
function compareTrue(a, b) {
  if(a===true && b===true){
    return true;
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  tri = (base * height) / 2;
  return tri
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nameFull) {
  string = nameFull[nameFull.length - 1] + ', ' + nameFull[0];
  return string;
}

// Desafio 5
function footballPoints(a, b) {
  return (a*3) + (b)
   }

// Desafio 6
function highestCount() {
  function highestCount(numbers) {
    hNumber = 0;
    hCount = 0;
    a = Math.max(...numbers);
    for (index = 0; index < numbers.length; index += 1) {
      if (numbers[index] === a) {
        hCount += 1;
      }
    }
    return hCount;
  }
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
