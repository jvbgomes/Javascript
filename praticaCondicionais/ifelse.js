//IF/ELSE

// definir um fluxo para somar ou multiplicar dois numeros usando if/else

const num1 = 10;
const num2 = 5;
const operacao = 'soma';

if (operacao === 'soma') {
    console.log(`O resultado da soma é ${num1 + num2}`);
} else if (operacao === 'multiplicacao') {
    console.log(`O resultado da multiplicação é ${num1 * num2}`);
} else {
    console.log('Operação inválida');
}

console.log('\n');
console.log('-----------------------------\n');

// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $6999 a $4000: 7% de bônus
// $3999 e abaixo: 9% de bônus

const salario = 2000;

const bonus = {
    alto: 1.09,
    medio: 1.07,
    baixo: 1.05,
    minimo: 1.03
};

let newsalario;

if (salario >= 11000) {
    newsalario = salario * bonus.minimo;
} else if (salario < 10999 && salario > 7000) {
    newsalario =  salario * bonus.baixo;
} else if (salario < 6999 && salario > 4000) {
    newsalario = salario * bonus.medio; 
} else {
    newsalario = salario * bonus.alto;
}

console.log(`O novo salário é $${newsalario}.`);