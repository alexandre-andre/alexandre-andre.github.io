// Desafio 1
console.log('exercicio 1')
function compareTrue(v1, v2) {
  // seu código aqui

  if (v1 == true && v2 == false) {
    return false
  } else if ((v1 && v2) == false) {
    return false
  } else {
    return true
  }
}
console.log(compareTrue(true, false))
console.log(compareTrue(false, false))
console.log(compareTrue(true, true))

// Desafio 2
console.log('exercicio 2')
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(2, 5));
console.log(calcArea(51, 1));

// Desafio 3
console.log('exercicio 3')
function splitSentence(string) {
  // seu código aqui
  splitting = string.split(' ');
  return splitting;  
}
console.log(splitSentence('go trybe'))
console.log(splitSentence('vamo que vamo'))
console.log(splitSentence('foguete'))

// Desafio 4
console.log('exercicio 4')
function concatName(arr) {
  // seu código aqui
  let firstIndex = arr[0]
  let lastIndex = arr[arr.length - 1]
  let result = lastIndex + ', ' + firstIndex
  return result
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
console.log('exercicio 5')
function footballPoints(wins, ties) {
  // seu código aqui
  let w = wins * 3;
  let t = ties * 1;
  let points = w + t;

  return points;
}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))

// Desafio 6
console.log('exercicio 6')
function highestCount(array) {
  // seu código aqui
  let max = Math.max(...array);
  let qtd = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == max) {
      qtd ++
    }
  }

  return qtd
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([0, 0, 0]))

// Desafio 7
console.log('exercicio 7')
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let position1 =  cat1 - mouse;
  let position2 = cat2 - mouse;

  if (position1 < 0) position1 *= -1;
  if (position2 < 0) position2 *= -1;

  if (position1 < position2) {
    return 'cat1';
  } else if (position1 > position2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 4, 3))
console.log(catAndMouse(1, 7, 13))
console.log(catAndMouse(1, 5, 5))

// Desafio 8
console.log('exercicio 8')
function fizzBuzz(array) {
  // seu código aqui
  let result = [];

  for (let i in array) {
    if ((array[i] % 3) == 0 && (array[i] %5) == 0) {
      result.push('fizzBuzz');

    } else if (array[i] % 3 == 0) {
      result.push('fizz');

    } else if (array[i] % 5 == 0) {
      result.push('buzz');

    } else {
      result.push('bug!');

    }

  }

  return result
}
fizzBuzz()
console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]))

// Desafio 9
console.log('exercicio 9')
// let a = 'Eu voU entrAr na Xp merMao!'
let encript = 'hi there!'
function encode(string) {
  // seu código aqui 
  let code = string.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5);
  
  return code;
}
console.log(encode('hi there!'));

let decript = encode(encript);
function decode(b) {
  // seu código aqui
  let dec = b.replaceAll(1, "a").replaceAll(2, "e").replaceAll(3, "i").replaceAll(4, "o").replaceAll(5, "u");

  return dec;
}
console.log(decode(decript))

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
};
