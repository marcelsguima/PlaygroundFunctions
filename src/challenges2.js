// Desafio 11
function generatePhoneNumber() {
  function generatePhoneNumber(numbers) {
    let thriceRepeat = 0;
    let numPhones = '';
    let numArray = [];
  
    if (numbers.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
  
    for (let index = 0; index < numbers.length; index += 1) {
      for (let compare = 1; compare < numbers.length; compare += 1) {
        if (numbers[index] === numbers[compare]) {
          thriceRepeat += 1;
          if (thriceRepeat > 2) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
      if (numbers[index] > 9 || numbers[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      thriceRepeat = 0;
      numArray.push(numbers[index]);
    }
    numPhones =
      '(' +
      numArray[0] +
      numArray[1] +
      ') ' +
      numArray[2] +
      numArray[3] +
      numArray[4] +
      numArray[5] +
      numArray[6] +
      '-' +
      numArray[7] +
      numArray[8] +
      numArray[9] +
      numArray[10];
  
    return numPhones;
  }
}
console.log(generatePhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
