for (let i = 1; i <= 10; i++) {
  console.log('De 1 a 10, o número é:', i);
}

/////////////////////////////////////////////////////////

let soma = 0;
for (let i = 1; i <= 100; i++){
    soma += i;
}
console.log('A soma dos números de 1 a 100 é:', soma);

////////////////////////////////////////////////////////

for (let num = 1; num <= 10; num++) {
    console.log(`\nTabuada do ${num}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${num} x ${j} = ${num * j}`);
    }
}

/////////////////////////////////////////////////////////

let contador = 10;
while (contador > 0) {
    console.log(contador);
    contador--;
}
console.log('Contagem finalizada!');

/////////////////////////////////////////////////////////

let numeroDigitado;
let contagem = 0;
const simulacao = [10, 5, 0, 3, 0, 7];
let i = 0;

do {
    numeroDigitado = simulacao[i];
    i++;
    if(numeroDigitado !== 0) {
        contagem++;
    }

} while (numeroDigitado !== 0);

console.log('Contagem de números digitados (diferentes de zero):', contagem);

/////////////////////////////////////////////////////////

const numSecreto = 9;
const tentativas = [3, 5, 8];

for (let i = 0; i < tentativas.length; i++) {
        if(tentativas[i] === numSecreto) {
        console.log('Parabéns! Você acertou o número secreto!');    
        break;    
    } else {
        console.log('Tente novamente! Tentativa:', tentativas[i]);
    }
}

//////////////////////////////////////////////////////////

let anoNascimento = 1990;
let anoAtual = 2015;
const dif = anoAtual - anoNascimento;

for (let idade = 0; idade <= dif; idade++) {
    console.log("Idade: ", idade, " - Ano: ", anoNascimento);
    anoNascimento++;
}

///////////////////////////////////////////////////////////

let pares = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        pares++;
    }
}
console.log('Total de números pares de 0 a 50:', pares);

///////////////////////////////////////////////////////////

let div = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        div++;
    }
}
console.log('Total de números divisíveis por 3 de 1 a 100:', div);

console.log('\n');
////////////////////////////////////////////////////////////

let opcao = 0;
let opcaoSimulada = [1, 2, 2, 3];
let indiceOpcao = 0;

do {
    opcao = opcaoSimulada[indiceOpcao];
    indiceOpcao++;
    console.log('Opção escolhida:', opcao);

    if (opcao === 1) {
        console.log('Ver saldo');
    } else if (opcao === 2) {
        console.log('Fazer depósito');
    } else if (opcao === 3) {
        console.log('Sair');
    } else {
        console.log('Opção inválida, tente novamente.');
    }
    
} while(opcao !== 3);