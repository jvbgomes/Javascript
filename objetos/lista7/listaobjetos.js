const pessoa = {
    nome: 'João',
    idade: 21,
    profissao: 'Desenvolvedor',
}
console.log('Nome: ',pessoa.nome);
console.log('Idade: ',pessoa.idade);
console.log('Profissão: ',pessoa.profissao);

console.log('--------------------------------------------');

pessoa.idade = 22;
console.log('Idade atualizada: ', pessoa.idade);

pessoa.cidade = 'Natal-RN';
console.log('Cidade: ', pessoa.cidade);

console.log('--------------------------------------------');

function criarPessoa(nome, idade, profissao) {
    return newpessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
}
console.log(criarPessoa('Maria', 30, 'Designer'));

console.log('--------------------------------------------');

const lista = [
    pessoa1 = {
        nome: 'Ana',
        idade: 18
    },
    pessoa2 = {
        nome: 'Carlos',
        idade: 17
    },
    pessoa3 = {
        nome: 'Beatriz',
        idade: 22
    }
]
console.log(lista);

for (const pessoa of lista) {
    if (pessoa.idade >= 18) {
        console.log(pessoa.nome, 'é maior de idade');
    }
}

console.log('--------------------------------------------');


