class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log("Olá meu nome é " + this.nome + " tenho " + this.idade + " , sou " + this.cargo)
    }

    trabalhar(){
        ("Agora começou meu turno!!")
    }

}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log("Seu turno ja começou, vai trabalhar")
    }

}


class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }
    
    programar(){
        console.log("Hoje vou programar um pouco de " + this.linguagem)
    }
        
}

let funcionario1 = new Funcionario("João","19 anos","Recepcionista")
let funcionario2 = new Funcionario("Julia","22 anos","Segurança")
let funcionario3 = new Gerente("Mari","25 anos","Gerente","Depart.Contas")
let funcionario4 = new Desenvolvedor("Felipe","19 anos","Desenvolvedor","JavaScript")

funcionario1.seApresentar()
funcionario1.trabalhar()
funcionario2.seApresentar()
funcionario2.trabalhar()
funcionario3.seApresentar()
funcionario3.gerenciar()
funcionario4.seApresentar()
funcionario4.trabalhar()
funcionario4.programar()