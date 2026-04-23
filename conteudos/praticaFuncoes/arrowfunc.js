// Um arrow function funciona desse jeito, oq está depois da seta é o corpo da função e oq está antes são os parâmetros.
const soma = (num1, num2) => {
    console.log(num1 + num2);
};

// Quando temos apenas um parâmetro, podemos omitir os parênteses.
const boasVindas = nome => `Olá, ${nome}!`;

const fatorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
};