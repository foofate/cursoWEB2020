/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário.
Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentarSalario(planoTrabalho, salario) {
    switch (planoTrabalho) {
        case 'A':
            console.log(`Seu novo salário é: R$${salario * 1.10}`)
            break;

        case 'B':
            console.log(`Seu novo salário é: R$${salario * 1.15}`)
            break;

        case 'C':
            console.log(`Seu novo salário é: R$${salario * 1.20}`)
            break;

        default:
            console.log('Erro! Plano inválido!')
            break;
    }
}

let salario = 2500.00
let planoTrabalho = 'A'
aumentarSalario(planoTrabalho, salario)
planoTrabalho = 'B'
aumentarSalario(planoTrabalho, salario)
planoTrabalho = 'C'
aumentarSalario(planoTrabalho, salario)