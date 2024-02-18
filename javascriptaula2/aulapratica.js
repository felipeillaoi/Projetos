let rlSync = require('readline-sync');

let bebida_escolhida = rlSync.question("Escolha uma das bebidas:\n1. Guarana\n2. Fanta Uva\n3. Vodka\n4. Agua\n");

let valor = ""

switch(bebida_escolhida){

    case "1":

        valor = "guaraná 6,50 R$"

        break;

    case "2":

        valor = "fanta uva 5,00 R$"

        break;

    case "3":

        valor = "vodka 20,00 R$"

        break;

    case "4":

        valor = "àgua 3,00 R$"

        break;

    default:

        console.log("Opção invalida")

}

console.log(`Você escolheu ${valor}`)