const cliente = {
    nome: 'João Victor',
    score: 3245,
    recorrente: true,
    tags: ['premium', 'clube'],
    //saudarCliente() {...}
    saudarCliente: function() {
        console.log(`Olá, ${this.nome}! Bem-vindo!`);
    } 
};

cliente.saudarCliente();
// this é uma palavra chave pra prender o contexto do objeto, ou seja, o cliente. 
// O this é uma referência ao objeto atual, permitindo acessar suas propriedades e métodos de forma dinâmica.
cliente.informarScore = function informarScore() {
    console.log(`O score do cliente é: ${this.score}`);
};

cliente.informarScore();