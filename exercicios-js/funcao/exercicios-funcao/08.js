/*
08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo,
ele mantémregistro de todos os as pontuações feitas por jogo.
Após cada jogo ele anota no novo valor e confere se omesmo é maior ou menor que seu melhor e pior desempenho.
Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”,
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar umvetor com
o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7]
(Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.)
*/

function score(scoreList) {
    const firstScore = scoreList[0]
    let bestScore = firstScore
    let worstScore = firstScore
    let pos = 1
    let worstPosition = 1
    let recordsNumber = 0

    for (s in scoreList) {
        if (scoreList[s] > bestScore) {
            recordsNumber++
            bestScore = scoreList[s]
        }

        if (scoreList[s] < worstScore) {
            worstScore = scoreList[s]
            worstPosition = pos
        }

        pos++
    }

    return [recordsNumber, worstPosition]
}

let scores = [10, 20, 20, 8, 25, 3, 0, 30, 1]
console.log(score(scores))
let pontuacoes = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0]
console.log(score(pontuacoes))