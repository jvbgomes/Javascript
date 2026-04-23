for( let contador = 1; contador <= 10; contador++) {
    console.log("Número atual: ", contador);
}

for (let numero = 0; numero <= 20; numero++) {
    if (numero % 2 == 0) {
        console.log("Número par: ", numero);
    } else {
        console.log("Número ímpar: ", numero);
    }
}

const palavra = "calopsita"

//palavra.length -> retorna o número de caracteres que uma string possui;
//palavra[1] -> retorna o caractere que está na posição 1 da string, ou seja, a letra "a".

for(let cont = 0; cont < palavra.length; cont++) {
    console.log(palavra[cont]);
}