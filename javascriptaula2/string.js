var nome = "marcos felipe andrade gonçalves";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Preencha o nome completo";
console.log(resultado);

var res = nome.toUpperCase();
console.log(res)

var jogo = "barcelona vs real madrid"
var posicao = jogo.indexOf("real");
console.log(posicao)

var cortado = jogo.slice(13,)
console.log(cortado)

var val = jogo.includes("real")
console.log(val)

var str1 = "hello"
var str2 = " world"

var str3 = str1.concat(str2);
console.log(str3);

var frase = "      marcos   felipe       "
console.log(frase.trim())

var num = "1|2|3|4|5|6|7"
var arr = num.split("|")
console.log(arr[4])