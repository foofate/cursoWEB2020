/*
10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.
*/

function divisivelPor3(num) {
    if (num % 3 === 0) {
        return true
    } else {
        return false
    }
}

let num = 27
console.log(divisivelPor3(num))
num = 35
console.log(divisivelPor3(num))