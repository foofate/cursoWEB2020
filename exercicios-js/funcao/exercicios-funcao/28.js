/*
28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function retornarQtdeParEImpar(vetor) {
    let qtdePar = 0
    let qtdeImpar = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            qtdePar++
        } else {
            qtdeImpar++
        }
    }

    console.log(`Quantidade de números pares: ${qtdePar}\nQuantidade de números ímpares: ${qtdeImpar}`)
}

let numeros = [4, 5, 4, 3, 12, 34, 23, 25, 45, 23]
retornarQtdeParEImpar(numeros)
