function soma(a, b) { return a + b;}

function multiplica(a, b) { return a * b;}

// função que usa as funções de soma e multiplicação como callback, ou seja, ela usa uma referência para as funções, sem precisar saber quem são elas.
function calcula(num1, num2, operacao) {
    return operacao(num1, num2);
}

console.log(calcula(5, 10, soma));
console.log(calcula(5, 10, multiplica));

// criar uma funcao que emita uma mensagem caso usuario x nao esteja interagindo com o sistema apos quantidade y de tempo

const userId = '4545656';

//const avisaUsuario = userId => console.log(`O usuário ${userId} está inativo.`); 

// tem que colocar o userId como terceiro argumento para que ele seja passado para a função avisaUsuario.
//setTimeout(avisaUsuario, 5000, userId);
setTimeout((userId) => console.log(`O usuário ${userId} está inativo.`), 4000, userId);