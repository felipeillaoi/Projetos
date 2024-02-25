var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme"
const parametros = url.split("?")
console.log(parametros[1])
const valores = parametros[1].split("&")


for(let i = 0 ; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
    }
}
console.log(valores)