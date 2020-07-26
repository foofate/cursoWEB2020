/*
18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
Use o comandoswitch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroExtenso(num) {
    switch (num) {
        case 0:
            console.log('zero')
            break;

        case 1:
            console.log('um')
            break;

        case 2:
            console.log('dois')
            break;

        case 3:
            console.log('trẽs')
            break;

        case 4:
            console.log('quatro')
            break;

        case 5:
            console.log('cinco')
            break;

        case 6:
            console.log('seis')
            break;

        case 7:
            console.log('sete')
            break;

        case 8:
            console.log('oito')
            break;

        case 9:
            console.log('nove')
            break;

        case 10:
            console.log('dez')
            break;

        default:
            console.log('Número fora do intervalo')
            break;
    }
}

let num = 1
numeroExtenso(num)
num = 4
numeroExtenso(num)
num = 8
numeroExtenso(num)
num = 10
numeroExtenso(num)
num = 11
numeroExtenso(num)