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

