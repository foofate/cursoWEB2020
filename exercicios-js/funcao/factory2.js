function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const prod1 = criarProduto('TV', 1500)
const prod2 = criarProduto('VideoGame', 2100)
console.log(prod1)
console.log(prod2)