const pessoa = {
    nome: 'João Victor',
    nascimento: '2005-06-16',
    cpf: '70068181418',
    pontuacao: 3245,
    trofeus: ['Campeão do campeonato de xadrez', 'speedrunner de Super Mario Bros',]
};

console.log("O nome da pessoa é: ",pessoa.nome);

console.log(pessoa.trofeus[0]);

// excluir dado

delete pessoa.cpf;

console.log(pessoa);  

function exibirTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`Tem o troféu: ${trofeu}`);
    }
}

exibirTrofeus(pessoa.trofeus);