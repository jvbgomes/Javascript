//funcoes callback. São funções passadas como argumento para outras funções, que serão executadas posteriormente.
// Com função tradicional
setTimeout(function() {
    console.log('olá, mundo!')
}, 2000);

// Com arrow function
setTimeout(() => console.log('olá, mundo!'), 2000);

setTimeout(exibeFrase, 5000);

// high order function: São funções que recebem outras funções como argumento ou retornam uma função como resultado. Elas são usadas para criar abstrações e manipular comportamentos de forma flexível.
function exibeFrase() {
    console.log('Essa frase foi exibida após 5 segundos!');
}