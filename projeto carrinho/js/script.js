var valorTotal = [0,0]
var valorProduto = [50.00,30.00]
var valorQuantidade = [0,0]

function adicionarItem(item){
    var quantidade = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)

    valorQuantidade[item] += 1;
    valorTotal[item] = Number.parseInt(valorProduto[item]) * valorQuantidade[item]
    quantidade.innerHTML = valorQuantidade[item]
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra()
}

function removerItem(item){
    if(valorQuantidade[item] > 0){
        valorQuantidade[item] -= 1;
        var quantidade = document.getElementById('quantidade' + item)
        var total = document.getElementById('total' + item)

        quantidade.innerHTML = valorQuantidade[item]
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * valorQuantidade[item]
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra()
    }
}

function valorCompra(){
    var valorTotalCompra = document.getElementById('valorTotalCompra')
    var valor = 0;

    for(var i = 0;i < valorTotal.length;i++){
        valor += valorTotal[i]
    }

    valorTotalCompra.innerHTML = valor.toFixed(2)
}