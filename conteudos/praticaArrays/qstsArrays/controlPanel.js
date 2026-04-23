const products = [
  { nome: "Notebook", preco: 2500, qtdVendida: 123 },
  { nome: "Smartphone", preco: 234, qtdVendida: 267 },
  { nome: "Tablet", preco: 889, qtdVendida: 67 },
  { nome: "Monitor", preco: 1230, qtdVendida: 71 },
];

console.log("Relatório de produtos vendidos:\n");
const exibiProduto = products.forEach((p) => {
    console.log(`Produto: ${p.nome} | Preço: R$${p.preco} | Quantidade vendida: ${p.qtdVendida}`);
})

console.log("\n");

console.log("Produtos com alto volume de vendas(> 100 unidades):");
const topSalles = products.filter((p) => p.qtdVendida > 100);
topSalles.forEach((p) => console.log(p.nome));

console.log("\n");

const vendasDeCadaProduto = products.map((p) => {
    const totalVendas = p.preco * p.qtdVendida;
    console.log(`Total de vendas por produto:\n ${p.nome}: R$${totalVendas}`);
    return totalVendas;
});

console.log("\n");

const maiorVenda = Math.max(...vendasDeCadaProduto);
const maisLucrativo = products[vendasDeCadaProduto.indexOf(maiorVenda)];

console.log(`Produto mais lucrativo: ${maisLucrativo.nome} com vendas totais de R$${maiorVenda}`);

//const produtos = [
//  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
//  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
//  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
//  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
//];
//
//let relatorio = ''; 
//let produtosMaisVendidos = ''; 
// 
//let totalPorProduto = ''; 
// 
//const Lucrativo = { nome: '', totalVendas: 0 }; 
// 
//produtos.forEach(prod => { 
// 
//  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
// 
//  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
// 
//  if (prod.quantidadeVendida > 100) { 
// 
//    produtosMaisVendidos += `${prod.nome}\n` 
// 
//  } 
// 
//  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
// 
//  if (totalVendidoProduto > Lucrativo.totalVendas) { 
// 
//    Lucrativo.nome = prod.nome; 
// 
//    Lucrativo.totalVendas = totalVendidoProduto; 
// 
//  }  
// 
//}) 
// 
//console.log('Relatório de produtos vendidos:'); 
// 
//console.log(relatorio); 
// 
//console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
// 
//console.log(produtosMaisVendidos); 
// 
//console.log('Total de vendas por produto:'); 
// 
//console.log(totalPorProduto); 
// 
//console.log('Produto mais lucrativo:'); 
// 
//console.log(`${Lucrativo.nome} com R$ ${Lucrativo.totalVendas} em vendas.`);