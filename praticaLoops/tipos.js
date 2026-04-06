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

