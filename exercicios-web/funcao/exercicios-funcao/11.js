/*
11)​As regras para o cálculo dos anos bissextos são as seguintes:De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console amensagem e retornando  true ou false.
*/

function ehBissexto(ano) {
    if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0) {
        console.log(`O ano ${ano} é bissexto!`)
        return true

    } else {
        console.log(`O ano ${ano} NÃO é bissexto!`)
        return false
    }
}

let ano = 2006
ehBissexto(ano)
ano = 2020
ehBissexto(ano)
ano = 2022
ehBissexto(ano)
ano = 1724
ehBissexto(ano)
ano = 2028
ehBissexto(ano)
ano = 2238
ehBissexto(ano)