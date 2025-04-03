var valorTotal = Number(prompt("Digite o valor total da compra"));
var codigoDesconto = prompt("Digite o código de desconto");

if (codigoDesconto == "DESC10"){
    alert("Desconto aplicado!");
    var desconto = valorTotal * (10/100);
    var valorTotalDesconto = valorTotal - desconto;

    alert(`Preço Inicial = ${valorTotal}
 Desconto Aplicado = ${desconto}
 Preço Total = ${valorTotalDesconto}`);
}else{
    alert(`Código de Desconto não existe preço total = ${valorTotal}`);
}