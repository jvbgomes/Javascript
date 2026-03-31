const pessoa = {
    nome: 'João',
    idade: 20,
    temCNH: true
};

pessoa.sobrenome = 'Silva';



const livro = {
    titulo: 'Hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 310,
    ano: 1937
};


livro.publicado = true;
livro.editora = 'HarperCollins';
livro.idiomas = [
    'inglês',
    'português',
    'espanhol'
]

livro.idiomas.push('Mandarim');
livro.idiomas.push('japonês');


console.log(livro.titulo);
console.log(livro.idiomas[1]);

console.log('A editora do livro é ', livro.editora);
console.log('O livro foi publicado? ', livro.publicado);

console.log('O livro tem ', livro.paginas, ' páginas');
console.log('Quantos idiomas tem o livro? ', livro.idiomas.length);

console.log('O livro tem o idioma francês? ', livro.idiomas.includes('francês'));
console.log('Qual o nome do autor do livro? ', livro.autor);

console.log('\n');

console.log('livro antes: ', livro);

delete livro.paginas;

console.log('Livro depois: ', livro);

console.log('Autor do livro: ', livro['autor']);
console.log('Editora: ', livro['editora']);

const autor = {
    nome: 'J.R.R. Tolkien',
    nacionalidade: 'Britânica',
    idade: 81,
    livros: [livro.titulo]
};

livro.autor = autor;

console.log(livro);

console.log(livro.autor.nome);
console.log(livro.autor.nacionalidade);