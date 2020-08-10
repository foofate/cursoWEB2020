/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
O programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3).
A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
Crie um caso default para operações inválidas.
*/

function operarNums(a, b, operacao) {
    switch (operacao) {
        case '+':
            console.log(a + b)
            break;

        case '-':
            console.log(a - b)
            break;

        case '*':
            console.log(a * b)
            break;

        case '/':
            console.log(a / b)
            break;

        default:
            console.log('Operação inválida!')
            break;
    }
}

let a = 10
let b = 5
let sinalOp = '+'
operarNums(a, b, sinalOp)
sinalOp = '-'
operarNums(a, b, sinalOp)
sinalOp = '*'
operarNums(a, b, sinalOp)
sinalOp = '/'
operarNums(a, b, sinalOp)
sinalOp = '%'
operarNums(a, b, sinalOp)