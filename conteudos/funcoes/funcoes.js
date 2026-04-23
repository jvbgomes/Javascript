//function saudacao(nome) { //nome é um parametro da função
//    console.log('Olá, ', nome);
//}

const saudacao = nome => console.log('Vida longa e prospera,', nome) //Função de seta (arrow function) - forma mais curta de escrever uma função, sem a palavra "function" e sem chaves, quando a função tem apenas uma linha de código.

saudacao('João') //'João' é o "argumento"
saudacao('Maria') //'Maria' é o "argumento"
saudacao('Pedro') //'Pedro' é o "argumento"

//function calcularDobroDeUm(numero) {
//    return numero * 2;
//}

//const calcularDobroDeUm = (numero) => {
//    return numero * 2;
//}

const calcularDobroDeUm = numero => numero * 2; //forma mais curta de escrever a função, sem a palavra "return" e sem chaves, quando a função tem apenas uma linha de código.

console.log(calcularDobroDeUm(5)) //10

console.log('oi', 'tudo', 'bem', '?')