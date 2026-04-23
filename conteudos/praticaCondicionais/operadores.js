// verificar se um ano é bissexto
// um ano é bissexto se:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

//const ano = 2000;
//const ano = 2022;
//const ano = 1992;

const ano = 2000;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}

