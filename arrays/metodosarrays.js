const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numeroPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numeroImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})


console.log('Todos os números: ', numeros)

console.log('Todos os números pares', numeroPares)

console.log('Todos os números impares', numeroImpares)

const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('Nossa lista dobrada: ', numerosDobrados)
