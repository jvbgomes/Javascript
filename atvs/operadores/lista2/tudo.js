let idade = 20;
let MaiorDeIdade = idade >= 18;

console.log("É de maior? ", MaiorDeIdade);

let nota1 = 7;
let nota2 = 9;

let media = (nota1 + nota2) / 2;

let Aprovado = media >= 7.5;

console.log("Passou? ", Aprovado);

const valorCompra = 35.90;
const valorPago = 50;

const troco = Math.round(valorPago - valorCompra);
console.log("O troco foi de R$ ", troco);

let senha1 = "123456";
let senha2 = "234567";
let comparacao = senha1 == senha2;
console.log("As senhas são iguais? ", comparacao);

let totalAulas = 50;
let faltas = 10;

let percentualFaltas = (faltas / totalAulas) * 100;

let AprovadoPorFrequencia = percentualFaltas <= 25;

console.log("Aprovado por frequência? ", AprovadoPorFrequencia);

let temlogin = true;

let temSenha = false;

let acessoPermitido = temlogin && temSenha;
console.log("Acesso permitido? ", acessoPermitido);

let Adulto = true;

let negacao = !Adulto;

console.log("Não é adulto? ", negacao);

let num1 = 12;
let num2 = 10;

let comparacaoNumeros = num1 > num2;
let par = num1 % 2 == 0 && num2 % 2 == 0;

console.log("num1 é maior que num2? ", comparacaoNumeros);
console.log("São pares? ", par);

let numero = 120;
let perc1 = 15/100;
let resultado = numero * perc1;

console.log("15% de 120 é igual a", resultado);

let expressao = 2 + (3 * 5);
console.log("A multiplicação tem precedência sobre a adição, por isso, o resultado é: " + expressao + " e não 25");