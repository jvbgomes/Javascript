const frutas = ['Maçã', 'Banana', 'Laranja'];

const maisFrutas = ['Uva', 'Morango', 'Abacaxi'];

const clone = [...frutas];

const todasAsFrutas = [...frutas, ...maisFrutas];


frutas.push('Pitanga') //.push adiciona um elemento no final do array, e retorna o novo length do array.

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasAsFrutas);

const [primeira, segunda, ...restante] = todasAsFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);