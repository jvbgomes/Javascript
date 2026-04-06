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

// De segunda a sexta --> Das 9 hrs as 18 hrs. No sabado e domingo --> horario especial --> das 10 hrs as 14 hrs
// controlar o funcionamento de uma loja com base nos dias da semana.
// domingo = 0, segunda = 1, terça = 2, quarta = 3, quinta = 4, sexta = 5, sábado = 6

const diaSemana = 6;

if (diaSemana >= 1 && diaSemana <= 5) {
    console.log('A loja está aberta das 9 hrs às 18 hrs.');
} else if (diaSemana === 0 || diaSemana === 6) {
    console.log('A loja está aberta em horário especial das 10 hrs às 14 hrs.');
} else {
    console.log('Dia da semana inválido.');
}

//Ou podemos fazer por switch case

switch (diaSemana) {
    case 1:
        console.log('A loja está aberta das 9 hrs às 18 hrs.');
        break;
    case 2:
        console.log('A loja está aberta das 9 hrs às 18 hrs.');
        break;
    case 3:
        console.log('A loja está aberta das 9 hrs às 18 hrs.');
        break;
    case 4:
        console.log('A loja está aberta das 9 hrs às 18 hrs.');
        break;
    case 5:
        console.log('A loja está aberta das 9 hrs às 18 hrs.');
        break;
    case 6:
        console.log('A loja está aberta em horário especial das 10 hrs às 14 hrs.');
        break;
    default:
        console.log('Dia da semana inválido.');
        break;    
}
