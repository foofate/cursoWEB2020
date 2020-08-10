/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

function factorial(num) {
    let fatorial = num
    for (let i = num - 1; i > 0; i--) {
        fatorial *= i
    }
    return fatorial
}

let num = 5
console.log(factorial(num))
num = 10
console.log(factorial(num))
num = 6
console.log(factorial(num))