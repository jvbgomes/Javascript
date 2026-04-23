const listaDeCompras = ['beterraba', 'laranja', 'banana', 'goma de tapioca', 'ovo', 'carne de sol'];

console.log(`Segundo item da lista: ${listaDeCompras[1]}`);

listaDeCompras.push('arroz');
console.log('Lista após a modificação:');
console.log(listaDeCompras);

const segLista = ['arroz', 'feijao', 'macarrão', 'tomate'];
console.log(`Segundo item da lista: ${segLista[1]}`);

segLista[segLista.length - 1] = 'fruta';

console.log("Lista após modificação: ", segLista);