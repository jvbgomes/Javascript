function saudacao(nome = "") {
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá, visitante!");
    }
}

saudacao('João');
saudacao();

function calcularDesconto(preco, desconto = 10) {
    const valorDesconto = preco * (desconto / 100);
    const valorFinal = preco - valorDesconto;
    return valorFinal;
}

console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));

const calcularMedia = (n1, n2) => {
    const media = (n1 + n2) / 2;
    return media;
}

console.log(calcularMedia(8, 10));

//function verificarParidade(numero) {
//    if (numero % 2 === 0) {
//        console.log(`O número ${numero} é par.`);
//    } else {
//        console.log(`O número ${numero} é ímpar.`);
//    }
//}
const verificarParidade = numero => {
    if (numero % 2 === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}
console.log(verificarParidade(4));
console.log(verificarParidade(7));

const verifParidade = num => num % 2 === 0 ? `O número ${num} é par.` : `O número ${num} é ímpar.`;
console.log(verifParidade(9));
console.log(verifParidade(22));