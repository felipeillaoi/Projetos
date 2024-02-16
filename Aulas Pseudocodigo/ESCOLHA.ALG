Algoritmo "escolha"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 02/11/2023
Var
// Seção de Declarações das variáveis 
op: inteiro:
resultado, num: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Esolha uma alternativa: ")
escreval("1 - Multiplique por 2")
escreval("2 - Eleve ao quadrado")
escreval("3 - Divide por 2")
leia(op)
escreval("Digite o Número: ")
leia(num)

escolha(op)
Caso 1
resultado <- num*2
Caso 2
resultado <- num*num
Caso 3
resultado <- num/2
fimescolha
escreval(resultado)

Fimalgoritmo