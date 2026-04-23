let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
};

const camila2 = { ...camila1 }; // spread operator para criar uma cópia do objeto camila1. spread = espalhar as propriedades.

camila2.idade = 30

console.log(camila1);
console.log(camila2);

camila1 = {
    ...camila2,
    profissao: 'Desenvolverdora Senior',
    possuiCNH: true
 };

 console.log(camila1);

 const { nome, ...restante } = camila1; // rest operator para extrair a propriedade e armazenar o restante em um novo objeto. rest = resto, restante.

 console.log(nome);
 console.log(restante);