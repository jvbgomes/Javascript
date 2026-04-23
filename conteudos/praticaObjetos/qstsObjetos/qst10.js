const curso = {
    titulo: "JavaScript para Iniciantes",
    estudantes: [
        { nome: "Nicollas", progresso: 83 },
        { nome: "Adriano", progresso: 54 },
        { nome: "Carlos", progresso: 14 },
        { nome: "Maria", progresso: 32 }
    ],

    gerarRelatorio: function() {
        console.log(`\nRelatório do curso: ${this.titulo}`);
        console.log('--------------------------------');
        for (const estudante of this.estudantes) {
            console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${estudante.progresso >= 70 ? 'Aprovado' : 'Em andamento'}`);
        }

        const totalEstudantes = this.estudantes.length;
        console.log(`\nTotal de estudantes: ${totalEstudantes}`);
        const mediaGeral = this.estudantes.reduce((soma, estudantes) => soma + estudantes.progresso, 0) / totalEstudantes;
        console.log(`\nMédia geral: ${mediaGeral.toFixed(2)}%`);
    }
}

curso.gerarRelatorio();