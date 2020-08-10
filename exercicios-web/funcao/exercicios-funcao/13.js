/*
13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente aodia.
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(diaNum) {
    switch (diaNum) {
        case 7:
        case 1:
            console.log('Fim de semana!!!')
            break;

        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
            console.log('Dia útil!!!')
            break;
        
        default:
            console.log('Dia inválido!!!')
    }
}

let dia = 1
diaUtil(dia)
dia = 4
diaUtil(dia)
dia = 8
diaUtil(dia)
