Algoritmo "vetor"

Var
// Se��o de Declara��es das vari�veis 
nomes: vetor[1..5] de caracter
notas: vetor[1..5] de real
i: inteiro
soma: real
media: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
soma <- 0
para i de 1 ate 5 faca
escreval("Digite o nome do aluno", i)
leia(nomes[i])
escreval("Digite a nota do aluno", i)
leia(notas[i])
soma <- soma + notas[i]
fimpara
media <- soma/5
escreval("Media da turma:", media)


Fimalgoritmo