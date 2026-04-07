const numero = 5;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//gerar numeros aleatorios de 1 a 50 
//interromper caso o numero seja 15
//interromper depois de 30 tentativas e contar a quantidade de tentativas
//const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

for (let contador = 0; contador <= 30; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    if (numeroAleatorio === 15) {
        console.log(`O ${numeroAleatorio} foi encontrado após ${contador} tentativas!`);
        break;
    }
}

//gerar numeros aleatorios de 1 a 50
//criar um contador em que só é incrementado caso o numero nao seja divisil por 5
//no final exibir o valor do contador

let contador = 0;
for (let i = 1; i <=30; i++) {
    const newNumAleatorio = Math.floor(Math.random() * 50) + 1;
    if (newNumAleatorio % 5 == 0) {
        continue;
    }
    contador++;
    console.log(`O numero ${newNumAleatorio} não é divisível por 5!`)
}
console.log(`O contador foi incrementado ${contador} vezes!`);

console.log('\n')
console.log('----------------------------------------------------------------')
// Revisando While e do-while

let numeroSecreto = 8;
let numeroAleat = 0;
let count = 0;

while (numeroAleat !== numeroSecreto) {
    numeroAleat = Math.floor(Math.random() * 50) + 1;
    count++;
}
console.log(`Adivinhou o numero secreto em ${count} tentativas!`);

let numeroRandom = 0;
do {
    numeroRandom = Math.floor(Math.random() * 50) + 1
}while (numeroRandom % 2 !== 0);

console.log(`O número ${numeroRandom} é divisível por 2!`);

console.log('\n')
console.log('----------------------------------------------------------------')

// Propriedade .Length

const palavra = 'papagaio';

// 0 1 2 3 4 5 6 7
//["p","a","p","a","g","a","i","o"];

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}

//Praticando while e do-while

//gerar um laco que tente "adivinhar" um dado numero de 1 a 50
// e conte a quantidade de tentativas ate o resultado 

console.log('\n')
console.log('----------------------------------------------------------------')

const numbSecret = 12;
let numbRandom = 0;
let countRandom = 0;

while (numbRandom !== numbSecret) {
    numbRandom = Math.floor(Math.random() * 50) + 1;
    countRandom++;
}
console.log(`O numero secreto foi adivinhado em ${countRandom} tentativas!`);

console.log('\n')
console.log('----------------------------------------------------------------')

//criar um laco que gere um numero aleatorio de 1 a 50
//executar o laco enquanto o numero gerado for par

let numbRandom2 = 0;

do {
    numbRandom2 = Math.floor(Math.random() * 50) + 1;
} while (numbRandom2 % 2 !== 0);

console.log(`O numero ${numbRandom2} é par!`);

console.log('\n')
console.log('----------------------------------------------------------------')

//criar um laco que recebe um texto e verifica se é um palíndromo --> Um palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente, desconsiderando espaços, pontuação e diferenças entre maiúsculas e minúsculas. 
//imprimir no console o texto, informando se é ou não um palíndromo

const texto = 'arara';
const texto2 = 'luz azul';

function verificaPalindromo(texto) {
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    if (texto === textoInvertido) {
        console.log(`O texto "${texto}" é um palíndromo!`);
    } else {
        console.log(`O texto "${texto}" não é um palíndromo!`);
    }
}

verificaPalindromo(texto);
verificaPalindromo(texto2);
//0 1 2 3 4
//A R A R A 
//texto.length - 1 = 4; i >=0; i--
//textoInvertido = ' + texto[4] = 'a'
//textoInvertido = 'a' + texto[3] = 'ar'
//textoInvertido = 'ar' + texto[2] = 'ara'
//textoInvertido = 'ara' + texto[1] = 'arar'
//textoInvertido = 'arar' + texto[0] = 'arara'

//tratando espacos e maiusculas/minusculas

console.log('\n')
console.log('----------------------------------------------------------------')

function verificaPalindromo2(texto) {
    const textoLimpo = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let textoInvertido2 = '';
    for (let i = textoLimpo.length - 1; i >= 0; i--) {
        textoInvertido2 += textoLimpo[i];
    }
    if (textoLimpo === textoInvertido2) {
        console.log(`O texto "${texto}" é um palíndromo!`);
    } else {
        console.log(`O texto "${texto}" não é um palíndromo!`);
    }
}

verificaPalindromo2(texto2);
verificaPalindromo2(texto);

    //.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() significa que estamos removendo todos os caracteres que não são letras ou números e convertendo o texto para minusculas. Isso é útil para garantir que a verificação de palíndromo seja feita de forma consistente, ignorando espaços, pontuação e diferenças entre maiúsculas e minúsculas.