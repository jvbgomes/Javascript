const arrDespesas = [134, 532, 234, 285, 341, 96, 122];

function calcularDespesas(arrDespesas) {
    let total = 0;
    for (let i = 0; i < arrDespesas.length; i++) {
        total += arrDespesas[i];
    }
    return total;
}

console.log(`O total das despesas é: R$ ${calcularDespesas(arrDespesas)}`);