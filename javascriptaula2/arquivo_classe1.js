class Dispositivo_eletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " ja está ligado")
            return;
        }
    this.ligado = true;
    }

}

class Smartphone extends Dispositivo_eletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new Smartphone("Sansung","Preto","Galaxy A70")
console.log(s1)
s1.ligar();
s1.ligar();