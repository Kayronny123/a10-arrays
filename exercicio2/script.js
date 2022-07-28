
      

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** 
// de um item do primeiro array, e uma informação booleana falsa
// sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()`
//  verdadeiro, e outro falso.

const numero = [3,1,9,6];
const comidas = ["burguer", "lasanha", "cuzcuz"];
const misturado = ["cuzcuz", 65, false];

const primeiro = numero[0];
console.log(primeiro);

const segundo = comidas[1] ;
console.log(segundo);

const terceiro = misturado[2];
console.log(terceiro);

console.log(numero.length);
console.log(comidas.length);
console.log(misturado.length);


console.log(numero.includes(9));
console.log(misturado.includes(true));