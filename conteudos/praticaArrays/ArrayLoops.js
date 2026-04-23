const arrNumeros = [46, 34, 23, 12];

for (let i = 0; i < arrNumeros.length; i++) {
    arrNumeros[i] *= 10;
}

console.log(arrNumeros);

const estudantes = ["JUliana", "aline", "SOLANGE"];

//toUpperCase é um metodo nativo do js que altera todas as strings para maiusculo.
for (let i = 0; i < estudantes.length; i++) {
    estudantes[i] = estudantes[i].toUpperCase();
}

console.log(estudantes);

const arrayNumeros = [18, 95, 45, 76, 23, 99];

// um tipo de for mais simples, quando não precisa de um ajuste tão fino no array.
for (let numero of arrayNumeros) {
    if (numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
}