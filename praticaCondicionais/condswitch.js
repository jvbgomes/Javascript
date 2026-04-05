//if ternario 

const nome = 'João';

const saudacao = nome ? `Olá, ${nome}!` : 'Olá, visitante!';
console.log(saudacao);


// O operador ternário é uma forma concisa de escrever uma expressão condicional. Ele é composto por três partes: a condição, o valor retornado se a condição for verdadeira e o valor retornado se a condição for falsa. No exemplo acima, a condição é `nome`, que verifica se a variável `nome` tem um valor. Se `nome` tiver um valor (ou seja, não for uma string vazia), a expressão retorna `Olá, ${nome}!`. Caso contrário, retorna `Olá, visitante!`.

const avalicao = 2;

switch (avaliacao) {
    case 5:
        console.log('Avaliação: Excelente');
        break;
    case 4:
        console.log('Avaliação: Bom');
        break;
    case 3:
        console.log('Avaliação: Regular');
        break;
    default:
        console.log('Avaliação: Insuficiente');
        break;
}