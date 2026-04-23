const cliente = {
    nome: 'João Victor',
    cpf: '123.456.789-00',
    email: 'jvbh@gmail.com',
    score: 789,
    recorrente: true,
    tags: ['cliente', 'vip', 'fidelidade'],
};

//metodo keys
console.log(Object.keys(cliente)); // Retorna um array com as chaves do objeto cliente

//metodo values
console.log(Object.values(cliente)); // Retorna um array com os valores do objeto cliente

//metodo entries
console.log(Object.entries(cliente)); // Retorna um array de arrays, onde cada sub-array contém uma chave e seu valor correspondente do objeto cliente

for (const info in cliente) {
    const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`
    console.log(texto);
}