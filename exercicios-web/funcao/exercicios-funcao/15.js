/*
15)​Um homem decidiu ir à uma revenda comprar um carro.
Ele deseja comprar um carro hatch, e a revendapossui, além de carros hatch, sedans, motocicletas e caminhonetes.
Utilizando uma estrutura switch, caso ocomprador queira o hatch, retorne: “Compra efetuada com sucesso”.
Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
Caso seja especificado um modelo que não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.
*/

function venderVeiculo(tipoVeiculo) {
    switch (tipoVeiculo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break;

        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break;

        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui!')
            break;
    }
}

let veiculo = 'sedan'
venderVeiculo(veiculo)
veiculo = 'hatch'
venderVeiculo(veiculo)
veiculo = 'caminhonete'
venderVeiculo(veiculo)
veiculo = 'motocicleta'
venderVeiculo(veiculo)
veiculo = 'carroça'
venderVeiculo(veiculo)