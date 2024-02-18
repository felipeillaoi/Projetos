var pais = "Brasil"
if(pais != "Brasil"){
    console.log("Voce é estrangeiro")
} else {
    console.log("você é brasileiro")
}

var idade = 22;

if (idade < 16){
    console.log("você não vota")
} else if (idade < 18 || idade > 65) {
    console.log("voto opcional")
} else {
    console.log("voto obrigatorio")
}

var dia = 8;
switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta")
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log("Esse dia da semana não existe")
}