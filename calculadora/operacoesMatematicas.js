export { soma, subtracao, multiplicacao, divisao };

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return num1 / num2;
}