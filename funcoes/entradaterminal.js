const readline = require('readline')

const leitor = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) =>  {
    console.log('Olá,', nome)
    console.log('Boas vindas ao nosso sistema!')

    leitor.question('Qual é a sua idade? ', (idade) => {
        if (idade < 18) {
            console.log('Você não pode tirar a sua CNH')
        } else {
            console.log('Uau! Você já pode tirar a sua CNH')
        }

        leitor.close() //fecha a interface de leitura, para que o programa possa terminar.
    })

})