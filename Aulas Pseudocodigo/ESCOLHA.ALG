Algoritmo "escolha"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 02/11/2023
Var
// Se��o de Declara��es das vari�veis 
op: inteiro:
resultado, num: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Esolha uma alternativa: ")
escreval("1 - Multiplique por 2")
escreval("2 - Eleve ao quadrado")
escreval("3 - Divide por 2")
leia(op)
escreval("Digite o N�mero: ")
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