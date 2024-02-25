var s = "javascript e python"
var posicao = s.indexOf("python")
console.log(posicao)

var nova_string = s.substring(13,19)
console.log(nova_string)

var frase = "ola mundo"
if(frase.startsWith("ola")){
    let sub = frase.substring(4)
    let nova_string = sub.replace("mundo","pessoal")
    let nova_string_maiuscula = nova_string.toUpperCase()
    console.log(nova_string_maiuscula)
}