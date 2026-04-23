// Função Anônima: Uma função sem nome, geralmente atribuída a uma variável ou usada como argumento para outra função. Não vai ser inçada no tempo de execução, ou seja, só pode ser chamada depois de sua definição.

const nomeVariavel = function() {
    console.log("Olá, sou uma função anônima atribuída a uma variável.");
}

const imprimeOlaMundo = function() {
    console.log("Olá, Mundo!");
}

const boasVindas = function(nome) { return `Olá, ${nome}!` };

// Função Recursiva: Uma função que chama a si mesma para resolver um problema. Geralmente, tem uma condição de parada para evitar chamadas infinitas.
const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}

console.log(fatorial(5)); // 120