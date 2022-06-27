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
function fizzBuzz(numbers) {
  let strings = [];
  for(let a of numbers){
    if((a % 3 === 0) && (num % 5 === 0)) {
      strings.push('fizzBuzz');
    } else if (a % 3 === 0) {
      strings.push('fizz');
    } else if (a % 5 === 0) {
      strings.push('buzz');
    } else if (!(a % 3 === 0) && !(a % 5 === 0)){
      strings.push('bug!');
    }
  }
  return strings;
}

// Desafio 9
function encode(string) {
  let coded;
      coded = string.replace(/a/g, "1");
      coded = coded.replace(/a/g, "1");
      coded = coded.replace(/e/g, "2");
      coded = coded.replace(/i/g, "3");
      coded = coded.replace(/o/g, "4");
      coded = coded.replace(/u/g, "5");
return coded;
}
function decode(string) {
  let decoded;
  decoded = string.replace(/a/g, "1");
  decoded = decoded.replace(/1/g, "a");
  decoded = decoded.replace(/2/g, "e");
  decoded = decoded.replace(/3/g, "i");
  decoded = decoded.replace(/4/g, "o");
  decoded = decoded.replace(/5/g, "u");
return decoded;
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
