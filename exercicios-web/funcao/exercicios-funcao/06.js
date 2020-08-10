/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
 * Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples
 * e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

 function jurosSimples(C, i, t) {
     const j = C * i * t
     const M = C + j
     return `Juros Simples:\nM = R$${M}`
 }

 function jurosCompostos(c, i, t) {
     const M = C * Math.pow((1 + i), t)
     return `Juros Compostos:\nM = R$${M}`
 }

 let C = 520
 let i = 0.01
 let t = 3
 console.log(jurosSimples(C, i, t))

 C = 8000
 i = 0.012
 t = 6
 console.log(jurosCompostos(C, i, t))
