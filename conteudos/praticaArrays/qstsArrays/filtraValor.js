const participantes = [
    { nome: "João", idade: 21 },
    { nome: "Maria", idade: 26 },
    { nome: "Carla", idade: 17 },
    { nome: "Pedro", idade: 10 },
    { nome: "Ana", idade: 23 }
];

const autorizados = participantes.filter(p => p.idade >= 18);

autorizados.forEach(p => {
    console.log(`Acesso liberado para: ${p.nome}`);
});

//join serve para juntar elementos de um array em uma string, usando um separador especificado. No caso, o separador é ", " para criar uma lista legível dos nomes do participantes aprovados.
console.log(`Lista de aprovados: [${autorizados.map(p => p.nome).join(", ")}]`);

// VARIAÇÃO COM FILTER E MAP -
console.log("\nVariação com filter e map:\n");

const autorizados2 = participantes.filter(p => {
    p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
    return p.idade >= 18;
});

const aprovados = autorizados2.map(p => p.nome);

console.log(`Lista de aprovados: [${aprovados.join(", ")}]`);
