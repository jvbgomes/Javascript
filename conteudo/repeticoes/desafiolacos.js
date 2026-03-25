//contar qnts numeoros pares e quantos numeros impares tem de 0 a 100.

let totalPares = 0;
let totalImpares = 0;

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 == 0) {
        totalPares++;
    } else {
        totalImpares++;
    }
}
console.log("Total de números pares: ", totalPares);
console.log("Total de números ímpares: ", totalImpares);