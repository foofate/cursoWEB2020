/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e
4) conveniados acima de 60 anos pagam R$130
*/

function valorAPagar(idade) {
    const precoBase = 100.00
    let precoFinal = precoBase

    if (idade < 10) {
        precoFinal += 80
    } else if (idade <= 30) {
        precoFinal += 50
    } else if (idade <= 60) {
        precoFinal += 95
    } else {
        precoFinal += 130
    }

    let retorno = `O conveniado deve o valor de R$${precoFinal}`
    console.log(retorno)
}

let idade = 8
valorAPagar(idade)
idade = 49
valorAPagar(idade)
idade = 29
valorAPagar(idade)
idade = 69
valorAPagar(idade)