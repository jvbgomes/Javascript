const precos = [100, 200, 300, 400, 500];

const precosComDesconto = precos.map((preco) => {
  return preco * 0.9;
});

console.log("Preços com desconto:", precosComDesconto);
//[90, 180, 270, 360, 450] cada elemento do array precos foi multiplicado por 0.9 e retornou um novo array com os preços com desconto.
