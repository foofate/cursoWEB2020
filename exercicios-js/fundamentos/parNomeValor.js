// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'E aí' //contexto léxico 2
    return saudacao
}

// Objetos são grupos de aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua A',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)