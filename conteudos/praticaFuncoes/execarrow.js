const calculaJuros = (valor, taxa, tempo) => {
    let taxaJuros = (taxa/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(1000, 5, 2)); // 1102.5