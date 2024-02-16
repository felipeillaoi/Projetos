Algoritmo "matriz"

Var
// Seção de Declarações das variáveis 
numeros: vetor[1..5,1..3] de inteiro
l,c,i,j,soma: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
soma <- 0
para l de 1 ate 5 faca
para c de 1 ate 3 faca
escreva("Digite o numero da posição ",l,".",c,": ")
leia(numeros[l,c])
fimpara
fimpara
para i de 1 ate l faca
para j de 1 ate c faca
soma <- numeros[i,j] + 2
escreval("Linha ",i," Coluna ",j, soma)
fimpara
fimpara
Fimalgoritmo