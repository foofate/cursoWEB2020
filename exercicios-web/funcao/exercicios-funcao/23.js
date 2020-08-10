/*
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas.
Calcule a média ponderada doaluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
Mostre o código doaluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5
e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calcularMediaAluno(codAluno, nota1, nota2, nota3) {
    let maiorNota = nota1
    let media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10

    if (nota2 > nota3 && nota2 > nota1) {
        maiorNota = nota2
        media = (nota2 * 4 + nota1 * 3 + nota3 * 3) / 10
    } else if (nota3 > nota1 && nota3 > nota2) {
        maiorNota = nota3
        media = (nota3 * 4 + nota1 * 3 + nota2 * 3) / 10
    }

    let status = 'APROVADO'
    if (media < 5) {
        status = 'REPROVADO'
    }

    console.log(`Código do aluno: ${codAluno}
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${media.toFixed(2)}
Status: ${status}`)
}

let codAluno = 1234
let nota1 = 5.8
let nota2 = 3
let nota3 = 5.5
calcularMediaAluno(codAluno, nota1, nota2, nota3)