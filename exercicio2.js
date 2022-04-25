//const soma = (a,b) => {
//    return a + b
//}
//console.log(soma(1,1));
//2. Refaça o exercício 1 usando arrow functions.



const soma = (a,b) => a + b
console.log('soma: '+ soma(1,1));

const subtracao = (a,b) => a - b
console.log('subtracao: '+ subtracao(1,1));

const divisao = (a,b) => { 
    if (b==0) {
    return 'Nao pode ter divisao por 0' 
    }
    return a/b
}
console.log('divisao: '+ divisao(1,0)); 

const multiplicacao = (a,b) => a * b
console.log('multiplicacao: '+ multiplicacao(1,1));