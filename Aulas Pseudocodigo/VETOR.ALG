Algoritmo "vetor"

Var
// Seção de Declarações das variáveis 
nomes: vetor[1..5] de caracter
notas: vetor[1..5] de real
i: inteiro
soma: real
media: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
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