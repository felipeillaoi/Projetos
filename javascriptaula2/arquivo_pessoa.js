class Pessoa{
    constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Certo " + this.nome);
    }

    get nome_completo(){
        console.log("Certo " + this.nome + " " + this.sobrenome)
    }
}

p1 = new Pessoa("Remy","Hadley");
p1.falar();
p1.nome_completo