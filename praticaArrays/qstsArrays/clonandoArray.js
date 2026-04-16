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