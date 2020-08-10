/*
07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, de tal modo
que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12.
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
mesmoque os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.
*/

function bhaskara(a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c)
    const xPlus = (- b + Math.sqrt(delta)) / (2 * a)
    const xMinus = (- b - Math.sqrt(delta)) / (2 * a)
    const results = [xPlus, xMinus]

    if (delta < 0) {
        return 'Delta é negativo'
    } else {
        return results
    }
}

let a = 1
let b = -7
let c = 6

console.log(bhaskara(a, b, c))