/*
27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duascrianças e
calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e emquantos anos isso acontecerá.
Utilize centímetros para as unidades de medida.
*/

function calcularCrescimentoCriancas(altura1, taxa1, altura2, taxa2) {
    const anoAtual = 2020
    let anoMaiorAltura = 2020
    let crianca1 = altura1
    let crianca2 = altura2

    if (altura1 > altura2) {
        while (crianca2 <= crianca1) {
            crianca1 += taxa1
            crianca2 += taxa2
            anoMaiorAltura++
        }
        console.log(`Ano que a Criança 2 ultrapassará a Criança 1: ${anoMaiorAltura}.\nAltura criança 1 antes e depois: ${altura1.toFixed(2)}, ${crianca1.toFixed(2)}\nAltura criança 2 antes e depois: ${altura2.toFixed(2)}, ${crianca2.toFixed(2)}`)
    } else if(altura2 > altura1) {
        while (crianca1 <= crianca2) {
            crianca1 += taxa1
            crianca2 += taxa2
            anoMaiorAltura++
        }
        console.log(`Ano que a Criança 1 ultrapassará a Criança 2: ${anoMaiorAltura}.\nAltura criança 1 antes e depois: ${altura1.toFixed(2)}, ${crianca1.toFixed(2)}\nAltura criança 2 antes e depois: ${altura2.toFixed(2)}, ${crianca2.toFixed(2)}`)
    } else {
        return false
    }
}

let altura1 = 130
let altura2 = 145
let taxa1 = 2.34
let taxa2 = 1.1
calcularCrescimentoCriancas(altura1, taxa1, altura2, taxa2)