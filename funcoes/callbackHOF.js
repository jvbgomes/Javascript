// HOF --> higher-order function === funcao que recebe outra funcao com parametro

function calcular(num1, num2, operacao) {


    return operacao(num1, num2)
}

function soma(numero1, numero2) {

    return numero1 + numero2;
}

function divisao(numero1, numero2) {

    return numero1 / numero2;
}

function multiplicacao(numero1, numero2) {

    return numero1 * numero2;
}

function subtracao (numero1, numero2) {

    return numero1 - numero2;
}

const resultadoSoma = calcular(10, 5, soma) // soma é a função callback, ou seja, a função que é passada como argumento para outra função (calcular) e é executada dentro dessa função.
console.log('Resultado da soma: ', resultadoSoma)

const resultadoDivisao = calcular(10, 5, divisao) // divisao é a função callback, ou seja, a função que é passada como argumento para outra função (calcular) e é executada dentro dessa função.
console.log('Resultado da divisão: ', resultadoDivisao)