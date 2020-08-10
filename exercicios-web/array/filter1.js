const nums = [1, 2, 3, 4, 5]
const multiplo2 = e => { if(e % 2 === 0) { return e } }
console.log(nums.filter(multiplo2))

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 19.99, fragil: false },
]

console.log(produtos.filter(function(e) {
    return false
}))

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500
const produtosFiltrados = produtos.filter(fragil).filter(caro)
console.log(produtosFiltrados)