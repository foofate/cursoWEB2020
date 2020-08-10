// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) // ERRO! let é indefinido fora do bloco   

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 34 }
console.log(i, nome)