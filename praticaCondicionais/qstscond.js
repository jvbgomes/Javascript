const idade = 21;

if (idade >= 18) {
    console.log('Acesso permitido.');
} else if (idade < 18) {
    console.log('Acesso negado. Você é menor de idade.');
} else {
    console.log('Idade inválida.');
}

// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"

const temp = -12;

if (temp > 25) {
    console.log('Quente');
} else if (temp >= 15 && temp <= 25) {
    console.log('Agradável');
} else if (temp < 15) {
    console.log('Frio');
} else if (temp < -20) {
    console.log('Temperatura extremamente baixa');
} else {
    console.log('Temperatura inválida');
}

//Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
//Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
//Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

const idadePessoa = 34;

if (idadePessoa >= 18) {
    console.log('Adulto');
} else if (idadePessoa >= 12 && idadePessoa < 18) {
    console.log('Juvenil');
} else if (idadePessoa < 12) {
    console.log('Infantil');
} else {
    console.log('Idade inválida');
}