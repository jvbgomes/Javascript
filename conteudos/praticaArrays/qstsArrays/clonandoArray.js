const pedidos = ['Tenis', 'Camisa', 'Calça', 'Boné', 'Meias'];

const copiaArray = (arr) => {
    const copia = [];
    for (let i = 0; i < arr.length; i++) {
        copia.push(arr[i]);
    }
    return copia;
}

console.log(pedidos);

const copia = copiaArray(pedidos);

copia.push('Relógio');
copia.push('Óculos');

console.log(copia);

//OU POSSO FAZER ASSIM:

const copia2 = pedidos.slice();

copia2.push('Carteira');
copia2.push('Cinto');

console.log(copia2);

//OU USANDO O SPREAD OPERATOR:

const copia3 = [...pedidos];

copia3.push('Celular');
copia3.push('Carregador');

console.log(copia3);