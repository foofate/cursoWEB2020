/*
29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function retornarQtdeNumerosIntervalo(vetor) {
    let qtdeSim = 0
    let qtdeNao = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdeSim++
        } else {
            qtdeNao++
        }
    }

    console.log(`Vetor: ${vetor}\nQuantidade de números no intervalo 10 e 20: ${qtdeSim}\nQuantidade de números fora do intervalo: ${qtdeNao}`)
}

let numeros = [1, 3, 23, 24, 55, 23, 34, 65, 2, 3, 15, 20]
retornarQtdeNumerosIntervalo(numeros)