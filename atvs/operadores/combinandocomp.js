const idade = 18;
const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH //AND

console.log("Posso dirigir? ", podeDirigir)

const podeViajarSozinho = maiorDeIdade || possuiCNH //OR
console.log("Posso dirigir (versão 2)? ", podeViajarSozinho)

const precisaDeAcompanhante = !maiorDeIdade //NOT
console.log("Preciso de acompanhante? ", precisaDeAcompanhante)