/*
19)​O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto    Preço
100         Cachorro Quente         R$ 3,00
200         Hambúrguer Simples      R$ 4,00
300         Cheeseburguer           R$ 5,50
400         Bauru                   R$ 7,50
500         Refrigerante            R$ 3,50
600         Suco                    R$ 2,80
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche.
Considere que a cada execução somente será calculado um item. Use ocomando switch.
Crie um caso default para produto não existente.
*/

function calcularPedido(cod, qntde) {
    switch (cod) {
        case 100:
            console.log(`Produto: Cachorro Quente\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 3}`)
            break;

        case 200:
            console.log(`Produto: Hambúrguer Simples\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 4}`)
            break;

        case 300:
            console.log(`Produto: Cheeseburger\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 5.5}`)
            break;

        case 400:
            console.log(`Produto: Bauru\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 7.5}`)
            break;

        case 500:
            console.log(`Produto: Refrigerante\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 3.5}`)
            break;

        case 600:
            console.log(`Produto: Suco\nQuantidade: ${qntde}\nValor do pedido: R$${qntde * 2.8}`)
            break;

        default:
            console.log('Produto não existente!')
            break;
    }
}

let codPedido1 = 500
let qntde1 = 2
let codPedido2 = 400
let qntde2 = 3
let codPedido3 = 800
let qntde3 = 1

calcularPedido(codPedido1, qntde1)
calcularPedido(codPedido2, qntde2)
calcularPedido(codPedido3, qntde3)