const livros = ['Dom Casmurro', 'O Alienista', 'Memórias Póstumas de Brás Cubas', 'Quincas Borba', 'Esaú e Jacó'];

const buscaItem = (arr, item) => {
    const itemUpper = item.toUpperCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toUpperCase() === itemUpper) {
            return `O livro ${item} foi encontrado na ${i + 1} instância da coleção.`;
        }
    }
    return `O livro ${item} não foi encontrado na coleção.`;
}

console.log(buscaItem(livros, 'O Alienista'));
console.log(buscaItem(livros, 'O Primo Basílio'));
console.log(buscaItem(livros, 'QUINCAS BORBA'));