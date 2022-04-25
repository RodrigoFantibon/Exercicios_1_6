//1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
//receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
//operação. Faça a implementação usando a palavra function para todas elas.


console.log('soma:')
function soma (a,b) {
    return a+b
}
console.log(soma(1,1));

console.log('subtracao:')
function subtracao (a,b) {
    return a-b
}
console.log(subtracao(1,1));

console.log('divisao:')
function divisao (a,b) {
    if (b==0) {
        return 'Nao pode ter divisao por 0' 
    }
    return a/b
}
console.log(divisao(1,1));

console.log('multiplicacao:')
function multiplicacao (a,b) {
    return a*b
}
console.log(multiplicacao(1,1));