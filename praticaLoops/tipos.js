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
