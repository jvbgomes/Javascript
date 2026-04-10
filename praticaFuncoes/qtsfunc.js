function saudacao(nome = "") {
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá, visitante!");
    }
}

saudacao('João');
saudacao();

console.log('\n');
console.log('---------------------------------------');

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

console.log('\n');
console.log('---------------------------------------');

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

console.log('\n');
console.log('---------------------------------------');

//toFixed(2) limita o número a duas casas decimais
const calcularFrete = (distancia, frete = 5) => {
    if (distancia <= 5) {
        return `O frete é de R$${frete}`;
    } else if (distancia > 5 && distancia <= 20) {
        let novoFrete = frete +(distancia - 5) * 0.5;
        return `O frete é de R$${novoFrete.toFixed(2)}`;
    } else {
        let novoFrete = 20;
        return `O frete é de R$${novoFrete}`;
    }
}

console.log(calcularFrete(3));
console.log(calcularFrete(10));
console.log(calcularFrete(25));

console.log('\n');
console.log('---------------------------------------');

function mensagemPersonalizada(mensagem) {
    return ` ${mensagem}`
}
function processarPedido(nome, tipo, mensagemPersonalizada) {
    console.log(`Processando pedido para ${nome}...`); 
    
    if (tipo === 'novo') {
        return mensagemPersonalizada(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else if (tipo === 'vip') {
        return mensagemPersonalizada(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else {
        return mensagemPersonalizada(`Obrigado pela sua compra, ${nome}!`);
    }
}

console.log(processarPedido('Maria', 'novo', mensagemPersonalizada));
console.log('\n');
console.log(processarPedido('Carlos', 'vip', mensagemPersonalizada));
console.log('\n');
console.log(processarPedido('Ana', 'comum', mensagemPersonalizada)); 

console.log('\n');
console.log('---------------------------------------');


function mostrarResposta(resposta) {
    setTimeout(() => {
        console.log(resposta);
    }, 3000);
}

function responderUsuario(nome, mostrarResposta) {
    return mostrarResposta(`Olá, ${nome}! Aqui está a resposta para a sua dúvida.`);
}

(responderUsuario('João', mostrarResposta));

console.log('\n');

//const mensPersonalizada = (mensagem) => mensagem;
//
//function avaliarDesempenho(pontuacao, mensPersonalizada) {
//    if (pontuacao >= 70) {
//        console.log(`Pontuação: ${pontuacao}`);
//        return mensPersonalizada(`Parabéns! Você foi aprovado!`);
//    } else if (pontuacao >= 50) {
//        console.log(`Pontuação: ${pontuacao}`);
//        return mensPersonalizada(`Precisa de reforço!`);
//    } else {
//        console.log(`Pontuação: ${pontuacao}`);
//        return mensPersonalizada(`Você foi reprovado!`);
//    }
//}
//
//console.log(avaliarDesempenho(85, mensPersonalizada));
//console.log(avaliarDesempenho(65, mensPersonalizada));
//console.log(avaliarDesempenho(45, mensPersonalizada));  

function avaliarDesempenho(pontuacao, callback) {
    let status = "";
 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
 
    callback(pontuacao, status);
}
 
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`);
 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}
 
avaliarDesempenho(82, gerarMensagem);

