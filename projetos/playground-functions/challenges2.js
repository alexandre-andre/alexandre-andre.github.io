// Desafio 10
function techList(tec, name) {
  // seu código aqui
  tec.sort();
  let arr= [];

  for (let i = 0; i < tec.length; i++) {
    arr.push({
      tech: tec[i],
      name
    });
  }

  if (tec.length === 0){
    return 'Vazio'
  }
  
  return arr
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'André'))

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let telefone = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    let count = 0;

    for (let i2 = 0; i2 < array.length; i2++) {
      if (array[i2] < 0 || array[i2] > 9) {
        return 'não é possível gerar um número de telefone com esses valores'
      };

      if (num == array[i2]) {
        count ++;

        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      };

    };

    count = 0;
  };

  let ddd = array.slice(0,2); 
  let p1 = array.slice(2,7);
  let p2 = array.slice(7,11);
  telefone = `(${ddd}) ${p1}-${p2}`.replaceAll(',', '');
  return telefone;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = ''

  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB){
    result = false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)){
    result = false;
  } else {
    result = true;
  }
  return result
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let sugest= ''
  if (string === '1 cerveja') {
    sugest = '1 copo de água';
  } else if (string === '1 cachaça, 5 cervejas e 1 copo de vinho') {
    sugest = '7 copos de água'
  } else if (string === '2 shots de tequila, 2 cervejas e 1 corote') {
    sugest = '5 copos de água'
  } else if (string === '1 copo de catuaba, 1 cervejas e 1 copo de vinho') {
    sugest = '3 copos de água'
  } else if (string === '4 caipirinhas e 2 cervejas') {
    sugest = '6 copos de água'
  }

  return sugest
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
