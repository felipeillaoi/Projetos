// como criar um objeto

const pessoa = {
    nome: "lucas",
    sobrenome: "silva"
}

console.log(pessoa['sobrenome'])

// segunda forma

const funcionario = new Object();
funcionario.nome = "marcos "
funcionario.sobrenome = "felipe"

console.log(funcionario.nome + funcionario.sobrenome)

// terceira forma

function criar_pessoa(nome,sobrenome){
    return {nome,sobrenome}
}
const p1 = criar_pessoa("joao","silva")
const p2 = criar_pessoa("marcos","jorge")

