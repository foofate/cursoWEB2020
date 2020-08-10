/** 01)​ Crie uma função que dado dois valores (passados como parâmetros)
 * mostre no console a soma, subtração,multiplicação e divisão desses valores. */

function operacoes(x, y) {
    console.log("x = " + x, "y = " + y)
    console.log("soma: " + (x + y))
    console.log("subtração: " + (x - y))
    console.log("multiplicação: " + (x * y))
    console.log("divisão: " + (x / y))
}

operacoes(10, 2)