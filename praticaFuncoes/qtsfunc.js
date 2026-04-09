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