function saudacao() {
    console.log("Olá, seja bem-vindo(a)!")
}
saudacao()

function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}
apresentarPessoa("João", 20);

function calculaIMC(peso, altura) {
    let imc = peso /(altura *altura);
    return imc;
}

console.log( "Meu imc é: ",Math.round(calculaIMC(100, 1.86)));

function verificaAprovacao(nota) {
    if (nota >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}
verificaAprovacao(8);
verificaAprovacao(5);

function ehPar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}
ehPar(2734);

function soma(x, y) {
    return x + y;
}
soma(4, 6);

function calcularTroco(valorCompra, valorPago) {
    let troco = valorPago - valorCompra;
    if (troco < 0) {
        console.log("Valor pago é insuficiente.");
    } else {
        console.log("Seu troco é: R$ ", troco);
    }
} 

const saudacao = nome => console.log('Vida longa e prospera,', nome);

saudacao('João');
saudacao('Maria');
saudacao('Pedro');



function executarAcao(acao) {
    if (typeof acao === "function") {
        acao();
    }
}

function imprimirAcao() {
    console.log("Executando ação!");
}

executarAcao(imprimirAcao);

function fazerPergunta(pergunta, respostaCorreta) {
    let resposta = 0;
    console.log("Qual é a capital do Brasil? ",pergunta);
    if (resposta === respostaCorreta) {
        console.log("Resposta correta!");
        resposta++;
    } else {
        console.log("Resposta incorreta!");
    }
}