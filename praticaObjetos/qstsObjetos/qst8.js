const relatorio = {
    temperatura: 87,
    vibracao: 32,
    pressao: 55,
    nivelRuido: 36
};

function imprimiRelatorio(rel) {
    console.log("Relatório de Monitoramento -");
    console.log('--------------------------------');
    console.log('Categorias avaliadas:', Object.keys(rel));
    console.log('Valores registrados:', Object.values(rel));
}

function alertarAnomalias(rel) {
    console.log("\nAnálise de Anomalias -");
    console.log('--------------------------------');
    for (const [chave, valor] of Object.entries(rel)) {
        if (valor > 50) {
            console.log(chave + ': ' + valor + ' (alerta)');
        } else {
            console.log(chave + ': ' + valor + ' (ok)');
        }
    }
}

imprimiRelatorio(relatorio);
alertarAnomalias(relatorio);