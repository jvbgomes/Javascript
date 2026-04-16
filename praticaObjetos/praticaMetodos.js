const user = {
    nome: 'João Victor',
    nascimento: '2005-06-16',
    cpf: '70068181418',
    pontuacao: 3245,
    trofeus: ['Campeão do campeonato de xadrez', 'speedrunner de Super Mario Bros',]
};

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade do usuário é: ${idade} anos.`);
}

user.calculaIdade();

console.log(user);