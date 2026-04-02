//const readline = require('readline')
import { createInterface } from 'readline';
import { soma, subtracao, multiplicacao, divisao } from './operacoesMatematicas.js';

const leitor = createInterface( {
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro numero:\n> ', (numero1) =>  {

    leitor.question('Digite a operação:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n> ', (operacao) => {
        leitor.question('Digite o segundo numero:\n> ', (numero2) => {

            const num1 = Number(numero1); //transforma a string digitada em um número, para assim realizar as operações.
            const num2 = Number(numero2);

            let resultado = null;

            if (operacao === '+') {
                resultado = soma(num1, num2);
            } else if (operacao === '-') {
                resultado = subtracao(num1, num2);
            } else if (operacao === '*') {
                resultado = multiplicacao(num1, num2);
            } else if (operacao === '/') {
                try {
                    resultado = divisao(num1, num2);
                } catch (error) {
                    console.error(error.message);
                }
            } else {
                console.log('Operação inválida. Por favor, escolha entre +, -, * ou /.');
            }

            if (resultado != null) {
                console.log(`Resultado: ${resultado}`);
            }

            leitor.close() //fecha a interface de leitura, para que o programa possa terminar.
        })
    })

})