/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para
entregar o mínimo de cédulaspara um determinado valor informado pelo usuário
considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas.
Por exemplo, ao solicitar R$18, o programa deveinformar apenas a seguinte informação
(note que não foram exibidas informações sobre as demais cédulas):
1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function qtdeNotas(valor) {
    let novoValor = valor
    let resto = novoValor
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
    let notasNecessarias = ''

    while (resto >= 1) {
        if (resto >= 100) {
            resto %= 100
            notas100 = (novoValor - resto) / 100
            novoValor -= notas100 * 100
            if (notas100 >= 1) {
                notasNecessarias += `${notas100} nota(s) de R$100,00. `
            }
        } else if (resto >= 50) {
            resto %= 50
            notas50 = (novoValor - resto) / 50
            novoValor -= notas50 * 50
            if (notas50 >= 1) {
                notasNecessarias += `${notas50} nota(s) de R$50,00. `
            }
        } else if (resto >= 10) {
            resto %= 10
            notas10 = (novoValor - resto) / 10
            novoValor -= notas10 * 10
            if (notas10 >= 1) {
                notasNecessarias += `${notas10} nota(s) de R$10,00. `
            }
        } else if (resto >= 5) {
            resto %= 5
            notas5 = (novoValor - resto) / 5
            novoValor -= notas5 * 5
            if (notas5 >= 1) {
                notasNecessarias += `${notas5} nota(s) de R$5,00. `
            }
        } else  {
            resto %= 1
            notas1 = (novoValor - resto) / 1
            novoValor -= notas1 * 1
            if (notas1 >= 1) {
                notasNecessarias += `${notas1} nota(s) de R$1,00. `
            }
        }
    }

    console.log(notasNecessarias)
}

let valor = 150
qtdeNotas(valor)
valor = 182
qtdeNotas(valor)
valor = 3456
qtdeNotas(valor)
valor = 333
qtdeNotas(valor)