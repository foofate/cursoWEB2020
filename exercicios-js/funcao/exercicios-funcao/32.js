/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
*/

function calcularMedia(vetor) {
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / vetor.length
    console.log(`Vetor: ${vetor}\nMédia: ${media.toFixed(2)}`)
}

let vetor = [10, 2, 13, 23, 2, 64, 15, 8, 6, 33, 24]
calcularMedia(vetor)