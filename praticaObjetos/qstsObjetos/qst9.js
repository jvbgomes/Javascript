const manutencao = {
    janeiro: 4,
    fevereiro: 2,
    marco: 3,
    abril: 1,
    maio: 6,
    junho: 0,
};
//reduce serve para reduzir um array a um unico valor, nesse caso, a soma total dos dias de manutenção.
function calculoDiasIsolado(manutencao) {
    return Object.values(manutencao).reduce((total, dias) => total + dias, 0);
}

function calculaDiasManutencao(manutencao) {
    console.log("\nCALCULANDO O TOTAL DE DIAS DE MANUTENÇÃO...");
    console.log("------------------------------");
    const totalDias = calculoDiasIsolado(manutencao);
    console.log(`Total de dias com manutenção: ${totalDias}`);
}
//filter cria um novo array com os meses que tiveram mais de 0 dias de manutenção.
function mesesComManutencao(manutencao) {
    console.log("\nMESES COM MANUTENÇÃO:");
    console.log("------------------------------");
    //_mes significa que a variavel mes é descartavel, nao é usada
    const mesesComDias = Object.entries(manutencao).filter(([_mes ,dias]) => dias > 0);

    mesesComDias.forEach(([mes]) => {
        console.log(`Mês com manutenção registrada: ${mes}`);
    });

    console.log(`Total de meses com manutenção: ${mesesComDias.length}`);
}


function StatusManutencao(manutencao) {
    console.log("\nSTATUS DE MANUTENÇÃO -");
    console.log("------------------------------");
    const totalDias = calculoDiasIsolado(manutencao);

    if (totalDias > 20) {
        console.log("Status: Alerta! Acima do limite anual")
    } else {
        console.log("Status: Normal. Dentro do limite anual")
    }
}

calculaDiasManutencao(manutencao);

mesesComManutencao(manutencao);

StatusManutencao(manutencao);