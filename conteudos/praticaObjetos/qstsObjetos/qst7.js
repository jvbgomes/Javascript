function montarObjeto(arrPares) {
    const resultado = {};
    
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }

    return resultado;

}

const dados = [['nome', 'Alice'], ['idade', 30], ['cidade', 'São Paulo']];

const objetoMontado = montarObjeto(dados);

console.log(objetoMontado);

