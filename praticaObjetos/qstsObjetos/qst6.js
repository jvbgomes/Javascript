const maquina = {
    nome: "Impressora 3D",
    funcionando: true,
    exibirStatus: function() {
        const status = this.funcionando ? `A ${this.nome} está em funcionamento.` : `A ${this.nome} está parada.`;
        console.log(status);
    }
}

console.log(maquina);

console.log("\nVerificando o status da máquina...\n");

maquina.exibirStatus();

console.log("\nAtualizando o status da máquina...\n");

maquina.funcionando = false;

maquina.exibirStatus();