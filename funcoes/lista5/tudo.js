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

