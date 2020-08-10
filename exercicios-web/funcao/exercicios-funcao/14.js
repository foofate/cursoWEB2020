/*
14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos:
Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”.
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções.
Crietambém um default, que retornará uma mensagem de erro no console.
*/

function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui!')
            break;

        case 'kiwi':
            console.log('Estamos com escassez de kiwis!')
            break;

        case 'melancia':
            console.log('Aqui está: são 3 reais o quilo!')
            break;

        default:
            console.log('Erro! Esta fruta não está cadastrada!')
            break;
    }
}

let fruta = 'maçã'
venderFruta(fruta)
fruta = 'melancia'
venderFruta(fruta)
fruta = 'kiwi'
venderFruta(fruta)
fruta = 'laranja'
venderFruta(fruta)