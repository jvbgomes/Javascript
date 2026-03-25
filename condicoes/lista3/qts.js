let idade = 18;
if (idade >= 18) {
    console.log("Pode comprar bebida alcoólica");
} else {
    console.log("É de menor, proibido!!");
}

let horaAtual;

if (horaAtual >= 6 && horaAtual <= 12) {
    console.log("Bom dia!");
} else if (horaAtual > 12 && horaAtual <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

let numero;

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}

let nota = 9;

if (nota >= 9) {
    console.log("A");
} else if (nota >= 8 && nota < 9) {
    console.log("B");
} else if (nota >= 6 && nota < 7.9) {
    console.log("C");
} else if (nota >= 4 && nota < 5.9) {
    console.log("D");
} else {
    console.log("F");
}

let num = 10;

num % 2 === 0 ? console.log("O número é par") : console.log("O número é ímpar");

let opcao; 

switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Sair");
        break;           
    default:
        console.log("Opção inválida");    
}

let email;

if (email == null) {
    console.log("Preencha o campo de email");
} else {
    console.log("Email válido");
}

let senha;
let senhaValida = true;

if (senhaValida == true ) {
    console.log("Senha válida");
} else {
    console.log("Senha muito curta");
}

let saldoDisponivel = 1000;

let valorCompra = 500;

if (valorCompra <= saldoDisponivel) {
    console.log("Compra aprovada!");
} else {
    console.log("Saldo insuficiente para a compra.");
}

let newemail;
let newsenha;
let newidade;

let formularioValido = true;

if (formularioValido == true) {
    console.log("Formulário enviado com sucesso!");
} else {
    console.log("Preencha todos os campos corretamente.");
}
