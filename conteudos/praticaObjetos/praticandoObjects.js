const clientes = [
    {
        nome: 'João Victor',
        ativo: true,
    },
    {
        nome: 'Maria Clara',
        ativo: false,
    },
    {
        nome: 'Pedro Henrique',
        ativo: true,
    },
    {
        nome: 'Ana Paula',
        ativo: false,
    },
]

for (const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`O cliente ${cliente.nome} está ${status}.`);
}