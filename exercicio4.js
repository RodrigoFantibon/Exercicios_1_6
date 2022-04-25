const readlineSync = require('readline-sync');

let calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    divisao: (a, b) => a / b,
    multiplicacao: (a, b) => a * b
}

var opcao;

do {
    opcao = readlineSync.question('Digite uma das opcoes\n 1- Soma\n 2- Subtracao\n 3- Multiplicacao\n 4- Divisao\n 5- Sair\n');
    switch (opcao) {
        case "1":
            console.log(`soma: ${calculadora.soma(2, 6)}\n`);
            break;

        case "2":
            console.log(`Subtracao: ${calculadora.subtracao(6, 2)}\n`);
            break;


        case "3":
            console.log(`Divisao:  ${calculadora.divisao(6, 2)}\n`)
            break;

        case "4":
            console.log(`multiplicacao: ${calculadora.multiplicacao(2, 6)}\n`)
            break;

        case "5":
            console.log("saindo")
            break;

        default:
            console.log("Digite apenas opções entre 1 e 5");
    }

} while (opcao != 5)






































































































