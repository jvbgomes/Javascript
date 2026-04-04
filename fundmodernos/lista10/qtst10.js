let pessoa = {
    nome: 'João Victor',
    idade: 20,
    email: 'jvbg16@gmail.com'
};

console.log(pessoa);

let {nome, idade, email} = pessoa;

console.log(nome);
console.log(idade);
console.log(email);
console.log('\n');
console.log('-----------------------------\n');

let ling = ['JavaScript', 'Python', 'Java'];

console.log(ling);

let [ling1, ling2, ling3] = ling;

console.log(ling1);
console.log(ling2);
console.log(ling3);

console.log('\n');
console.log('-----------------------------\n');

function restoperator(...numeros) {
    let total = 0

    for (let numero of numeros) { // usando o for tradicional, temos for (let i = 0; i < numeros.length; i++) { total += numeros[i];}
        total += numero;
    }

    return total
}

console.log(`O total é: ${restoperator(6, 7, 54, 12, 34, 23)}`);

console.log('\n');
console.log('-----------------------------\n');

let frutas1 = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas1);
let frutas2 = ['Abacaxi', 'Manga', 'Uva'];
console.log(frutas2);

let todasFrutas = [...frutas1, ...frutas2];
console.log(todasFrutas);

console.log('\n');
console.log('-----------------------------\n');

let person1 = {
    name: 'Alice'
};

let person2 = {
    age: 27
};

let sumperson = {
    ...person1,
    ...person2
};

console.log(sumperson);

console.log('\n');
console.log('-----------------------------\n');

function saudacao(nome) {
    if (nome !== undefined) {
        return `Olá, ${nome}`;
    } else {
        return 'Olá, visitante';
    }
}

console.log(saudacao('João'));
console.log(saudacao());

//forma alternativa
console.log('\n');

function novaSaudacao(nome) {
    return nome != null ? `Olá, ${nome}` : 'Olá, visitante';
}
console.log(novaSaudacao('Maria'));
console.log(novaSaudacao());

console.log('\n');
console.log('-----------------------------\n');

const hoje = new Date();
console.log(hoje);

console.log('Dia: ', hoje.getDay());
console.log('Mês: ', hoje.getMonth() + 1);
console.log('Ano: ', hoje.getFullYear());

console.log('\n')
console.log('-----------------------------\n');

 export function somar(a, b) {
    return a + b;
}

//import {somar} from './somar.js';
console.log(`O resultado da soma foi ${somar(2, 6)}`);

console.log('\n')
console.log('-----------------------------\n');


//function Livro(titulo, autor) {
//    this.titulo = titulo;
//    this.autor = autor;
//}
class Livro {
    constructor(titulo, autor) { //o constructor é um método especial que é chamado qnd criamos uma nova instância da classe.
        this.titulo = titulo;
        this.autor = autor;
    }

    apresentar() {
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor}`);
    }
}

const livro1 = new Livro('Dom Casmurro', 'Machado De Assis.');
const livro2 = new Livro('O Hobbit', 'J.R.R. Tolkien.');

console.log(livro1);
console.log(livro2);

livro1.apresentar();
livro2.apresentar();