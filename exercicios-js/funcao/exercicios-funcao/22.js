/*
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade.
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos).
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calcularAnuidade(mes, valor) {
    const i = 0.05
    if (mes !== 1 && mes > 1 && mes <= 12) {
        const M = valor * Math.pow((1 + i), mes)
        console.log(`Valor a pagar: R$${M.toFixed(2)}`)
    } else if (mes > 12) {
        console.log('Mês informado inválido!')
    } else {
        console.log(`Valor a pagar: R$${valor.toFixed(2)}`)
    }
    
}

let valorAnuidade = 560
let mesPago = 12
calcularAnuidade(mesPago, valorAnuidade)