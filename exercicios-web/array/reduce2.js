const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (acumulador && atual) {
        acumulador = true
    } else {
        acumulador = false
    }
    return acumulador
})
console.log(resultado)

// Desafio 2: algum aluno é bolsista?
const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (acumulador || atual) {
        acumulador = true
    }
    return acumulador
})
console.log(resultado2)