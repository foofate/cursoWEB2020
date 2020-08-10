/*
36)​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicarVetor(vetor, inteiro) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * inteiro)
    }

    return resultado
}

function multiplicarVetorSeNumElementoMaiorQueCinco(resultado, inteiro) {
    let maioresQue5 = []
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i] > 5) {
            maioresQue5.push(resultado[i] * inteiro)
        }
    }

    return maioresQue5
}

let vetor = [1, 2, 3, 4, 5]
let vetorMultiplicado = multiplicarVetor(vetor, 2)
console.log(vetorMultiplicado)
console.log(multiplicarVetorSeNumElementoMaiorQueCinco(vetorMultiplicado, 2))
