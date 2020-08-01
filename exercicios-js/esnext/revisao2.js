// Arrow function
const soma = (a, b) => a + b
console.log(soma(1, 2))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
lexico1()
const lexico2 = lexico1.bind({})
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() //valor padrao
log('Outra coisa')

// operador rest 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5, 6))