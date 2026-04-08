const numeroFinal= 12;

for (let i = 1; i <= numeroFinal; i++) {
    console.log(i);
}

console.log('\n')
console.log('----------------------------------------------------------------')

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log('Lançar!');

console.log('\n')
console.log('----------------------------------------------------------------')

const numbFinal = 10;

for (let i = 1; i <= numbFinal; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('\n')
console.log('----------------------------------------------------------------')

let senha = 'seguranç@2025';

for (let i = 0; i < senha.length; i++) {
    console.log(`Caractere ${i + 1}: ${senha[i]}`);
}

console.log('\n')
console.log('----------------------------------------------------------------')

const entradas = ["Ana", "Bruno", "Carla", "fim", "Eduardo"];

//for (let i = 0; i < entradas.length; i++) {
//    console.log(entradas[i]);
//    if(entradas[i].toLowerCase() === "fim") {
//        console.log("Encerrando o loop...");
//        break;
//    }
//}

let i = 0;
while (entradas[i] !== "fim") {
    console.log(entradas[i]);
    i++;
}

console.log('\n')
console.log('----------------------------------------------------------------')

for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        console.log("Número proibido encontrado! Encerrando...");
        break;
    }
    console.log(i);
}

const totalDias = 10;
let money = 0;

for (let dia = 1; dia <= totalDias; dia++) {
    money += dia;
}
console.log(`Ao final de ${totalDias} dias, você terá economizado R$${money}!`);

console.log('\n')
console.log('----------------------------------------------------------------')

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;

let segundos = 0;

do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);

    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log('Temperatura ideal atingida.');
    }

} while (segundos < tempoMinimo);

console.log(`Tempo total de aquecimento: ${segundos} segundos`);
//for (let segundos = 1; segundos <= tempoMinimo; segundos++) {
//    console.log(`Aquecendo... segundo ${segundos}`);
//    if (segundos === temperaturaIdealAlcancadaEm) {
//        console.log('Temperatura ideal atingida.');
//    }
//}
console.log('Tempo total de aquecimento: 5 segundos.');

console.log('\n')
console.log('----------------------------------------------------------------')    

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
const maxCaixas = 5;
let caixasProcessadas = 0;

do {
    for (let i = 0; i < caixas.length; i++) {
        if (caixas[i] >= 0) {
            console.log(`Caixa processada: ${caixas[i]}`)
            caixasProcessadas++;
            if (caixasProcessadas == maxCaixas) {
                console.log('Limite de caixas processadas atingido!')
                break;
            }
        } else {
            console.log(`Caixa danificada, ignorada.`)
        }
    }
} while (caixasProcessadas < maxCaixas);
