const arrNumeros = [12, 23, 34, 45, 56];

arrNumeros.push(67);
console.log(arrNumeros);
//[12, 23, 34, 45, 56, 67] adiciona-se no final do arr.

arrNumeros.pop();
console.log(arrNumeros);
//[12, 23, 34, 45, 56]

// Verifica se tem o numero ou algo dentro do array.
const elem = arrNumeros.indexOf(12);
console.log(elem);
//0

const novoArr = arrNumeros.slice(2);
console.log(novoArr);
//[34, 45, 56]

//map pega todos os elementos de um array um por um e aplica algum tipo de coisa
const arrCalculado = arrNumeros.map((num) => {
    return num * 10;
});

console.log(arrCalculado);

arrNumeros.forEach((num, i) => {
    console.log(`O número ${num} está no índice ${i}`);
});

const arrFiltrado = arr.Numeros.filter(num => num % 5 === 0);

//[45]
console.log(arrFiltrado);