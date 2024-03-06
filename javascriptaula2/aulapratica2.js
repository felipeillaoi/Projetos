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
        console.log("Agora começou meu turno!!")
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
function enviar_dados(){
    try{
        var nome_funcionario = document.forms["cadastro"]["nome"].value
    if(typeof nome_funcionario !== 'string' || nome_funcionario === ""){
        throw new Error("Campo Nome Invalido!")
    }
    var idade_funcionario = parseInt(document.forms["cadastro"]["idade"].value)
    if(idade_funcionario < 18){
        throw new Error("Funcionario menor de idade")
    }
    var cargo_funcionario = document.forms["cadastro"]["cargo"].value
    if(typeof cargo_funcionario !== 'string' || cargo_funcionario === ""){
        throw new Error("Campo Cargo Invalido")
    }
    var departamento_funcionario = document.forms["cadastro"]["departamento"].value;
    var linguagem_funcionario = document.forms["cadastro"]["linguagem"].value;
    
    var novo_funcionario = []
    if (cargo_funcionario.toLocaleUpperCase() === "GERENTE") {
        novo_funcionario.push(new Gerente(nome_funcionario, idade_funcionario, cargo_funcionario, departamento_funcionario));
        var novo_gerente = novo_funcionario[novo_funcionario.length - 1];
        alert("Nome: " + novo_gerente.nome + "\nIdade: " + novo_gerente.idade + "\nCargo: " + novo_gerente.cargo + "\nDepartamento: " + novo_gerente.departamento);
    } else if (cargo_funcionario.toLocaleUpperCase() === "DESENVOLVEDOR" || cargo_funcionario.toLocaleUpperCase() === "PROGRAMADOR") {
        novo_funcionario.push(new Desenvolvedor(nome_funcionario, idade_funcionario, cargo_funcionario, linguagem_funcionario));
        var novo_desenvolvedor = novo_funcionario[novo_funcionario.length - 1];
        alert("Nome: " + novo_desenvolvedor.nome + "\nIdade: " + novo_desenvolvedor.idade + "\nCargo: " + novo_desenvolvedor.cargo + "\nLinguagem: " + novo_desenvolvedor.linguagem);
    } else {
        novo_funcionario.push(new Funcionario(nome_funcionario, idade_funcionario, cargo_funcionario));
        var novo_trabalhador = novo_funcionario[novo_funcionario.length - 1];
        alert("Nome: " + novo_trabalhador.nome + "\nIdade: " + novo_trabalhador.idade + "\nCargo: " + novo_trabalhador.cargo);
    }

    } catch (error) {
        alert("Ocorreu um erro: " + error.message)
    }
}

