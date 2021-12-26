const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const productDetailsTest = productDetails('Alcool gel', 'Máscara');
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  
  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetailsTest)).toBe(true);
  });

  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o array retornado pela função contém dois itens', () => {
    expect(productDetailsTest).toHaveLength(2);
  });
  
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetailsTest[0] && typeof productDetailsTest[1]).toEqual('object');
  });

  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetailsTest[0]).not.toMatchObject(productDetailsTest[1]);
    // toMatchObject - verificar se um objeto JavaScript corresponde a um subconjunto das propriedades de um objeto.
  });

  // Teste se os dois productIds terminam com 123.
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetailsTest[0].details.productId && productDetailsTest[1].details.productId).toContain('123');
  });
});
