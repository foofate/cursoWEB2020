/*
31)​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetore imprime a quantidade no console.
*/

function qtdeNegativos(vetor) {
    let negativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }

    console.log(`Vetor: ${vetor}\nQuantidade de números negativos: ${negativos}`)
}

let vetor = [10, 2, -13, 23, -2, 64, 15, 8, -6, 33, 24]
qtdeNegativos(vetor)