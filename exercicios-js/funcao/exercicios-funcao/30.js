/*
30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorEMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    console.log(`Vetor: ${vetor}\nMaior número do vetor: ${maior}\nMenor número do vetor: ${menor}`)
}

let vetor = [10, 2, 13, 23, 2, 64, 15, 8, 6, 33, 24]
maiorEMenor(vetor)