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
function highestCount(numbers) {
  hNumber = 0; hCount = 0;
  maxNumber = Math.max(...numbers);
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNumber) {
      hCount += 1;
    }
  }
  return hCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distCat1 = cat1 - mouse;
  distCat2 = cat2 - mouse;
  
  if(distCat1 < 0) {
    distCat1 = -distCat1;
  }
  if(distCat2 < 0) {
    distCat2 = -distCat2;
  }
  if(distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else if(distCat1 === distCat2)
  return 'os gatos trombam e o rato foge';
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
