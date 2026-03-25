const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
});

console.log('Bem-vindo(a) ao nosso Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n (a) define\n (b) function\n (c) create\n >', (resposta1) => {
    if (resposta1.toLowerCase() == 'b') {
        acertos++;
    } else if (resposta1 != 'a' && resposta1 != 'b' && resposta1 != 'c') {
        console.log('Resposta inválida! Por favor, responda com a letra correta: a, b ou c');
    }

    rl.question('2) Qual dessas é uma estrutura de repetição?\n a) loopar\n (b) repeat\n (c) for\n >', (resposta2) => {
        if (resposta2.toLowerCase() == 'c') {
            acertos++;
        } else if (resposta2 != 'a' && resposta2 != 'b' && resposta2 != 'c') {
            console.log('Resposta inválida! Por favor, responda com a letra correta: a, b ou c');
        }

        rl.question('3) Qual o valor é considerado falsy em JavaScript?\n (a) 1\n (b) 0\n (c) "texto"\n >', (resposta3) => {
            if (resposta3.toLowerCase() == 'b') {
                acertos++;      
            } else if (resposta3 != 'a' && resposta3 != 'b' && resposta3 != 'c') {
                console.log('Resposta inválida! Por favor, responda com a letra correta: a, b ou c');
            }

            if (acertos == 3) {
                console.log('Você acertou tudo! Parabéns!');
            } else if (acertos == 2) {
                console.log('Muito bem! Você acertou 2 questões, continue assim!');
            } else if (acertos == 1) {
                console.log('Você acertou somente 1 de 3 perguntas! Precisa estudar mais!');
            } else {
                console.log('Você não acertou nenhuma pergunta! Estude mais e tente novamente!');
            }

            rl.close();
        })
    })
})
