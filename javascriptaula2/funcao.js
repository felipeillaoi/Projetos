function calcular_desconto(numero){
    let resultado = numero/10;
    numero -= resultado
    console.log(numero)
}

function multiplicar(x,y){
    return x * y
}

var a = multiplicar(2,5)

function soma_valores(a,b = 2,c = 6){
    var total = a + b + c
    return total
}

var f = soma_valores(8)
console.log(f)

var info_cal = function(a,b,c){
    return a + b + c
}

console.log(info_cal(2,5,7))

const soma = (soma1,soma2) => {
    return soma1 + soma2
}
console.log(soma(3,6))

const numeros = [1,2,3,4,5]

const valores = numeros.map((num) => num * num)
console.log(valores)

var lista_produtos = ["geladeira","fogão","air fryer"]
var lista_maisculo = lista_produtos.map(primeira_maiscula)

function primeira_maiscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(lista_maisculo)
console.log("oi")