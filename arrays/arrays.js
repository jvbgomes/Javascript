// lista de valores que podem ser de qualquer tipo, inclusive outras listas
const listaDeNomes = ['João', 'Maria', 'Pedro', 'Ana']

const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango']

// console.log('A lista é:',frutas)

// console.log('Primeira fruta:',frutas[0])
// console.log('Última fruta:', frutas[4])

// console.log('Total de frutas:', frutas.length)

// frutas.push('Melancia')

// console.log('Total de frutas depois de adicionar melancia:', frutas.length)

// console.log('Ultima fruta: ', frutas[frutas.length - 1])

//frutas.splice(2, 1)

//console.log('Depois de remover: ', frutas)

console.log("\n")

for (let i = 0; i < frutas.length; i++){
    console.log('índice: ', i)
    console.log(frutas[i])
}

console.log("\n")

console.log('Usando forEach')

frutas.forEach((valor, indice) => {
    console.log('índice: ', indice, valor)
})

console.log("\n")

console.log('Usando for of:')

for (const fruta of frutas) {
    console.log('fruta da vez: ', fruta)
}