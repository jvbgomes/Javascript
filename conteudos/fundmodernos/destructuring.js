const pessoa = {
    nome: 'João',
    idade: 17,
    profissao: 'Estudante'
}

const { nome, idade } = pessoa; //destructuring para extrair as propriedades nome e idade do objeto pessoa e armazená-las em variáveis com os mesmos nomes. A sintaxe de destructuring é uma forma concisa de extrair valores de objetos ou arrays e atribuí-los a variáveis.

console.log(nome);
console.log(idade);

//destructuring para extrair as propriedades nome, idade e profissao do objeto pessoa e usá-las diretamente como parâmetros da função saudacao.
//Os templates literals sao uma forma de criar strings de uma forma mais simples e clara, usando crases (`) e permitindo a interpolação de variáveis e expressões dentro da string usando a sintaxe ${}.
function saudacao({ nome, idade, profissao }) { 
    console.log(`Olá, ${nome}! Você tem ${idade} anos e é ${profissao}.`); 
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }

}
saudacao(pessoa);

const frutas = ['Maçã', 'Banana', 'Laranja'];

const [primeira, segunda] = frutas;

// const primeira = frutas[0];
// const segunda = frutas[1];

