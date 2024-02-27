class Conta_cliente{
    constructor(numero_conta,saldo,debito,credito){
        this.numero_conta = numero_conta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcular_saldo_atual(){
        return this.saldo - this.debito + this.credito
    }

    verificar_saldo(){
        const saldo_atual = this.calcular_saldo_atual()
        if(saldo_atual >= 0){
            alert("Saldo Positivo " + saldo_atual)
        } else {
            alert("Saldo negativo " + saldo_atual)
        }
    }
}

let numero_conta = prompt("Digite o número da conta do cliente")
let saldo = parseFloat(prompt("Digite o saldo do cliente"))
let debito = parseFloat(prompt("Digite o debito do cliente"))
let credito = parseFloat(prompt("Digite o credito do cliente"))

let conta = new Conta_cliente(numero_conta,saldo,debito,credito)
conta.verificar_saldo();