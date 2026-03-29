const nomes = ["João", "Mikaelly", "Carlos", "Breno", "Pretinha"];

for (let i = 0; i < nomes.length; i++) {
  console.log("índice: ", i);
  console.log(nomes[i]);
}

console.log("\n");

const frutas = ["Kiwi", "Banana", "Melancia", "Maça", "Pêra"];
console.log("Lista de frutas: ", frutas);

frutas.push("Uva"); // adiciona um elemento no final da lista
frutas.shift(); // remove o primeiro elemento da lista
console.log("\n");

console.log("Lista nova de frutas: ", frutas);

const cidades = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Salvador",
];

console.log("Quantidade de cidades: ", cidades.length);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos números: ", soma);

const notas = [7, 8, 9, 6];

let somaNotas = 0;
let mediaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}
mediaNotas = somaNotas / notas.length;

if (mediaNotas >= 7) {
  console.log("Aprovado!!");
} else {
  console.log("Reprovado!");
}

const nomesUsuarios = ["João", "Maria", "Pedro", "Ana"];

nomesUsuarios.forEach((nome, indice) => {
  console.log("Olá, " + nome + "!");
});
const precosprodutos = [10, 20, 30, 40, 50];

const precosComDescontos = precosprodutos.map((preco) => {
    return preco * 0.9
})
console.log('Preços com desconto: ', precosComDescontos)